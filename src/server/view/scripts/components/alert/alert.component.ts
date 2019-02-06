import {
  RibaComponent,
  JQuery,
  Debug,
} from '@ribajs/core';

import pugTemplate from './alert.component.pug';

import { SocketService } from '../../services/socket.service';
import { IAlertParams } from '../../interfaces';

type Type = 'notification' | 'alert' | 'marquee';

interface IScope {
  send: AlertComponent['send'];
  hide: AlertComponent['hide'];
  setType: AlertComponent['setType'];
  message: string;
  types: Type[];
  type: Type;
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
    send: this.send,
    hide: this.hide,
    setType: this.setType,
    message: 'Aufgrund einer Störung kommt es derzeit im gesamten Regionalbahnverkehr zu hohen Verspätungen sowieo Zugausfällen.',
    types: ['marquee', 'notification', 'alert'],
    type: 'marquee',
  };

  constructor(element?: HTMLElement) {
    super(element);
    this.$el = JQuery(this.el);
    this.debug('constructor', this);
    this.scope.type = this.scope.types[0],
    this.init(AlertComponent.observedAttributes);
  }

  public setType(type: Type) {
    this.scope.type = type;
  }

  public send() {
    const params: IAlertParams = {
      type: this.scope.type,
      title: this.scope.message,
      message: this.scope.message,
    };
    if (params.type === 'marquee') {
      this.socket.sendGlobalNotification('SHOW_MARQUEE', params);
    } else {
      this.socket.sendGlobalNotification('SHOW_ALERT', params);
    }
  }

  public hide() {
    this.socket.sendGlobalNotification('HIDE_ALERT', {});
    this.socket.sendGlobalNotification('HIDE_MARQUEE', {});
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
