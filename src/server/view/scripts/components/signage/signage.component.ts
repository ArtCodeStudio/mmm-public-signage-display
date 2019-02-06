import {
  RibaComponent,
  JQuery,
  Debug,
} from '@ribajs/core';

import pugTemplate from './signage.component.pug';

import { SocketService } from '../../services/socket.service';
import { ConfigService } from '../../services/config.service';

import { IMagicMirrorConfig, ISignageTimeline, ISignageTimelineModule, TimelineType } from '../../interfaces';

export interface IScope {
  config?: IMagicMirrorConfig;
  save: SignageComponent['save'];
  addItemToTimeline: SignageComponent['addItemToTimeline'];
  selectModuleForTimeline: SignageComponent['selectModuleForTimeline'];
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

  protected socketService = new SocketService();

  protected autobind = true;

  static get observedAttributes() {
    return [];
  }

  protected debug = Debug('component:' + SignageComponent.tagName);

  protected scope: IScope = {
    config: undefined,
    save: this.save,
    addItemToTimeline: this.addItemToTimeline,
    selectModuleForTimeline: this.selectModuleForTimeline,
    selectTimetype: this.selectTimetype,
    timeline: [],
    _timeType: 'modules',
    timeTypes: ['modules', 'media'],
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.init(SignageComponent.observedAttributes);
  }

  public selectModuleForTimeline(timeIndex: number, module: ISignageTimelineModule) {
    this.scope.timeline[timeIndex]._module = module.module;
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
      _module: this.scope.config.modules[0].module,
      modules: [{
        module: this.scope.config.modules[0].module,
        position: 'fullscreen_above',
      }],
    });
  }

  protected async beforeBind() {
    this.debug('beforeBind');
    return ConfigService.get()
    .then((config) => {
      this.scope.config = config;
      this.addItemToTimeline();
      return this.scope.config;
    });
  }

  protected async afterBind() {
    this.debug('afterBind', this.scope);
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
