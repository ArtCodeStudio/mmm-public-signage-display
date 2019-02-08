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

// import { SocketService } from './services/socket.service';

// Own
import * as CustomComponents from './components';
// nimport { customBinders } from './binders';

import { ConfigService } from './services/config.service';

declare const vendor: {
  [name: string]: string;
};

export class Main {

  protected view?: View;
  protected debug = Debug('app:main');
  protected riba = new Riba();
  protected model: any = {};
  protected dispatcher = new EventDispatcher();
  // protected socket = new SocketService();

  constructor() {

    this.debug('init the main application');

    this.loadVendorFiles();

    // Regist custom components
    this.riba.module.regist({
      components: CustomComponents,
      // binders: {...customBinders},
    });

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

  protected loadVendorFiles() {
    ConfigService.get()
    .then((config) => {
      for (const name in vendor) {
        if (vendor.hasOwnProperty(name)) {
          const path = config.paths.vendor + '/' + vendor[name];
          const extension = path.slice((Math.max(0, path.lastIndexOf('.')) || Infinity) + 1);
          let append: HTMLScriptElement | HTMLLinkElement | null = null;
          switch (extension.toLowerCase()) {
            case 'js':
              append = document.createElement('script');
              append.type = 'text/javascript';
              append.src = path;
              document.getElementsByTagName('body')[0].appendChild(append);
              break;
            case 'css':
              append = document.createElement('link');
              append.rel = 'stylesheet';
              append.type = 'text/css';
              append.href = path;
              document.getElementsByTagName('head')[0].appendChild(append);
              break;
          }
          if (append) {
            append.onload = () => {
              this.debug('Loaded', path);
            };
            append.onerror = () => {
              console.error('Error on loading:', path);
            };
          }
        }
      }
    });
  }
}

const app = new Main();
