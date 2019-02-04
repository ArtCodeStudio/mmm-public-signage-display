import {
  RibaComponent,
  JQuery,
  Debug,
} from '@ribajs/core';

import pugTemplate from './alert.component.pug';

import { SocketService } from '../../services/socketService';

interface IScope {
  message: string;
  send: AlertComponent['send'];
}

export class AlertComponent extends RibaComponent {

  public static tagName: string = 'rv-alert';

  protected socket = new SocketService();

  protected autobind = true;

  static get observedAttributes() {
    return [];
  }

  protected $el: JQuery<HTMLElement>;
  protected debug = Debug('component:' + AlertComponent.tagName);

  protected scope: IScope = {
    message: '',
    send: this.send,
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.$el = JQuery(this.el);
    this.debug('constructor', this);
    this.init(AlertComponent.observedAttributes);
  }

  public send() {
    this.socket.sendSocketNotification('SHOW_ALERT', {
      title: this.scope.message,
      message: this.scope.message,
      global: true,
    });
  }

  protected async init(observedAttributes: string[]) {
    return super.init(observedAttributes)
    .then((view) => {
      return view;
    });
  }

  protected async beforeBind() {
    this.debug('beforeBind');
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
