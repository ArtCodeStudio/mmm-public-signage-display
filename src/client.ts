import { IMMLog, IModuleRegister, IClientModuleInstance } from './interfaces';

export interface MagicMirrorHelper {
  getModules(): IClientModuleInstance[];
}

declare const Module: IModuleRegister;
declare const Log: IMMLog;
declare const MM: MagicMirrorHelper;

Module.register('mmm-public-signage-display', {
  // Default module config.
  defaults: {
    text: 'Hello World!',
  },

  /**
   * This method is called when a module gets instantiated.
   * In most cases you do not need to subclass this method.
   */
  init(): void {
    Log.log(`[${this.name}] init`);
  },

  /**
   * This method is called when a module is loaded.
   * Subsequent modules in the config are not yet loaded.
   * The callback function MUST be called when the module is done loading.
   * In most cases you do not need to subclass this method.
   * @param callback
   */
  loaded(callback: () => void): void {
    Log.log(`[${this.name}] loaded`);
    callback();
  },

  /**
   * This method is called when all modules are loaded an the system is ready to boot up.
   * Keep in mind that the dom object for the module is not yet created.
   * The start method is a perfect place to define any additional module properties.
   */
  start(): void {
    Log.log(`[${this.name}] started`, MM);
  },

  /**
   * The getScripts method is called to request any additional scripts that need to be loaded.
   * This method should therefore return an array with strings.
   * If you want to return a full path to a file in the module folder, use the `this.file('filename.js')` method.
   * In all cases the loader will only load a file once.
   * It even checks if the file is available in the default vendor folder.
   */
  getScripts(): string[] {
    return [this.file('client/scripts/app.js')];
  },

  /**
   * The getStyles method is called to request any additional stylesheets that need to be loaded.
   * This method should therefore return an array with strings.
   * If you want to return a full path to a file in the module folder, use the `this.file('filename.css')` method.
   * In all cases the loader will only load a file once.
   * It even checks if the file is available in the default vendor folder.
   */
  getStyles(): string[] {
    return [this.file('client/styles/module-control.css')];
  },

  /**
   * The getTranslations method is called to request translation files that need to be loaded.
   * This method should therefore return a dictionary with the files to load, identified by the country's short name.
   * If the module does not have any module specific translations, the function can just be omitted or return `false`.
   */
  // getTranslations() {
  //   Log.log(`[${this.name}] getTranslations`);
  //   return {
  //     en: 'translations/en.json',
  //     de: 'translations/de.json'
  //   }
  // },

  /**
   * Whenever the MagicMirror needs to update the information on screen
   * (because it starts, or because your module asked a refresh using this.updateDom()),
   * the system calls the getDom method. This method should therefore return a dom object.
   */
  // getDom(): HTMLElement {
  //   Log.log(`[${this.name}] getDom`);
  //   const wrapper = document.createElement('div');
  //   wrapper.innerHTML = 'Hello world!';
  //   return wrapper;
  // },

  /**
   * Whenever the MagicMirror needs to update the information on screen (because it starts,
   * or because your module asked a refresh using `this.updateDom()`),
   * the system calls the getHeader method to retrieve the module's header.
   * This method should therefor return a string. If this method is not subclassed,
   * this function will return the user's configured header.
   *
   * If you want to use the original user's configured header, reference `this.data.header`.
   */
  getHeader(): string {
    Log.log(`[${this.name}] getHeader`);
    return this.data.header;
  },

  getTemplate(): string {
    Log.log(`[${this.name}] getTemplate`);
    return '<div>Hello {{text | safe}}</div>';
  },

  getTemplateData(): object {
    Log.log(`[${this.name}] getTemplateData`);
    return this.config;
  },

  /**
   * That MagicMirror core has the ability to send notifications to modules.
   * Or even better: the modules have the possibility to send notifications to other modules.
   * @param notification The notification identifier.
   * @param payload The payload of a notification.
   * @param sender he sender of the notification. If this argument is `undefined`, the sender of the notififiction is the core system.
   */
  notificationReceived<T>(notification: string, payload: T, sender?: any): void {
    Log.log(`[${this.name}] notificationReceived ${notification}`);
  },

  /**
   * When using a node_helper, the node helper can send your module notifications.
   * @param notification The notification identifier.
   * @param payload The payload of a notification.
   */
  socketNotificationReceived<T>(notification: string, payload: T): void {
    Log.log(`[${this.name}] socketNotificationReceived ${notification}`);
    this.sendNotification(notification, payload);
  },

  /**
   * When a module is hidden (using the module.hide() method), the suspend() method will be called.
   * By subclassing this method you can perform tasks like halting the update timers.
   */
  suspend(): void {
    Log.log(`[${this.name}] suspend`);
  },

  /**
   * When a module is requested to be shown (using the module.show() method), the resume() method will be called.
   * By subclassing this method you can perform tasks restarting the update timers.
   */
  resume(): void {
    Log.log(`[${this.name}] resume`);
  },
});
