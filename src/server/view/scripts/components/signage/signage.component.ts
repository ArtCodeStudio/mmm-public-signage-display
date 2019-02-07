import {
  RibaComponent,
  JQuery,
  Debug,
} from '@ribajs/core';

import pugTemplate from './signage.component.pug';

import { SocketService } from '../../services/socket.service';
import { ConfigService } from '../../services/config.service';

import { DropdownService } from '@ribajs/bs4';

import { IMagicMirrorConfig, ISignageTimeline, ISignageTimelineModule, TimelineType, IMagicMirrorModuleConfig } from '../../interfaces';

export interface IScope {
  config?: IMagicMirrorConfig;
  save: SignageComponent['save'];
  addItemToTimeline: SignageComponent['addItemToTimeline'];
  // toggleModulesDropdown: SignageComponent['toggleModulesDropdown'];
  selectModulesDropdown: SignageComponent['selectModulesDropdown'];
  addModuleToTimeline: SignageComponent['addModuleToTimeline'];
  selectTimetype: SignageComponent['selectTimetype'];
  timeline: ISignageTimeline[];
  /**
   * Current selected timetype for dropdown
   */
  _timeType: TimelineType;
  timeTypes: TimelineType[];
}

export class SignageComponent extends RibaComponent {

  public static tagName: string = 'rv-signage';
  protected $el: JQuery<HTMLElement>;

  protected socketService = new SocketService();
  // protected modulesDropdown?: DropdownService;

  protected autobind = true;

  static get observedAttributes() {
    return [];
  }

  protected debug = Debug('component:' + SignageComponent.tagName);

  protected scope: IScope = {
    config: undefined,
    save: this.save,
    addItemToTimeline: this.addItemToTimeline,
    // toggleModulesDropdown: this.toggleModulesDropdown,
    selectModulesDropdown: this.selectModulesDropdown,
    addModuleToTimeline: this.addModuleToTimeline,
    selectTimetype: this.selectTimetype,
    timeline: [],
    _timeType: 'modules',
    timeTypes: ['modules', 'media'],
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.$el = JQuery(this.el);
    this.init(SignageComponent.observedAttributes);
  }

  // public toggleModulesDropdown(_: any, event: Event) {
  //   if (!this.modulesDropdown) {
  //     console.error('No dropdown set or found!');
  //     return;
  //   }
  //   this.debug('toggle');
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.modulesDropdown.toggle();
  // }

  public selectModulesDropdown(time: ISignageTimeline, module: IMagicMirrorModuleConfig, _: any, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    time._module = module;
    DropdownService.closeAll();
  }

  // add module to time of timeline
  public addModuleToTimeline(time: ISignageTimeline, module: IMagicMirrorModuleConfig, _: any, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.debug('addModuleToTimeline', module);
    const newModule = {
      module,
      name: module.module,
      position: 'fullscreen_above',
    };
    time.modules.push(newModule);
  }

  public selectTimetype(timeType: TimelineType) {
    this.scope._timeType = timeType;
  }

  public save() {
    this.socketService.sendGlobalNotification('SHOW_MARQUEE', {});
  }

  protected async init(observedAttributes: string[]) {
    return super.init(observedAttributes)
    .then((view) => {
      return view;
    });
  }

  protected addItemToTimeline() {
    if (!this.scope.config) {
      return;
    }
    // Add new timeline
    this.scope.timeline.push({
      type: this.scope._timeType,
      _module: this.scope.config.modules[0],
      modules: [{
        module: this.scope.config.modules[0],
        name: this.scope.config.modules[0].module,
        position: 'fullscreen_above',
      }],
    });

    this.initModulesDropdown();
  }

  protected async beforeBind() {
    this.debug('beforeBind');
    return ConfigService.get()
    .then((config) => {
      this.scope.config = config;
      return this.scope.config;
    });
  }

  protected async afterBind() {
    this.debug('afterBind', this.scope);
    this.addItemToTimeline();
  }

  protected initModulesDropdown() {
    // this.modulesDropdown = new DropdownService(this.el.querySelector('.modules-dropdown') as HTMLButtonElement);
    // WORKAROUND
    const buttonsAddModule = this.el.querySelectorAll('.button-add-module') as NodeListOf<HTMLButtonElement>;
    for (const buttonAddModule of buttonsAddModule) {
      buttonAddModule.onclick = (event: MouseEvent) => {
        const time = this.scope.timeline[Number(buttonAddModule.dataset.index)];
        this.addModuleToTimeline(time, time._module as IMagicMirrorModuleConfig, null, event);
      };
    }
  }

  protected requiredAttributes() {
    return [];
  }

  protected attributeChangedCallback(attributeName: string, oldValue: any, newValue: any, namespace: string | null) {
    super.attributeChangedCallback(attributeName, oldValue, newValue, namespace);
  }

  // deconstructor
  protected disconnectedCallback() {
    super.disconnectedCallback();
  }

  protected template() {
    let template: string | null = null;
    // Only set the component template if there no childs already
    if (this.el.hasChildNodes()) {
      this.debug('Do not template, because element has child nodes');
      return template;
    } else {
      template = pugTemplate(this.scope);
      this.debug('Use template', template);
      return template;
    }
  }
}
