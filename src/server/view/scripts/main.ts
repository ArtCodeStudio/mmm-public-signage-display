import {
  Riba,
  View,
  Debug,
  JQuery,
  Utils,

  coreModule,

  EventDispatcher,

} from '@ribajs/core';

// Extensions / Modules
import { routerModule, IState } from '@ribajs/router';

import { bs4Module } from '@ribajs/bs4';

// Own
// import * as CustomComponents from './components';
// import { customBinders } from './binders';

export class Main {

  protected view?: View;
  protected debug = Debug('app:main');
  protected riba = new Riba();
  protected model: any = {};
  protected dispatcher = new EventDispatcher();

  constructor() {

    this.debug('init the main application');

    // Regist custom components
    // this.riba.module.regist({
    //   components: CustomComponents,
    //   binders: {...customBinders},
    // });

    // Regist modules
    this.riba.module.regist(coreModule);
    this.riba.module.regist(routerModule);
    this.riba.module.regist(bs4Module);

    // this.dispatcher.on('newPageReady', (viewId: string, currentStatus: IState, prevStatus: IState, $container: JQuery<HTMLElement>, newPageRawHTML: string, dataset: any, isFirstPageLoad: boolean) => {
    //   this.debug('newPageReady', viewId, currentStatus, dataset);
    // });

    JQuery(($: JQueryStatic) => {
      const bindToElement = JQuery('body')[0];
      this.debug('bind to', bindToElement);
      this.view = this.riba.bind(bindToElement, this.model);
    });

  }
}

const app = new Main();
