export interface IShowOptions {
  /**
   * When setting lock string, the module can not be shown without passing the correct lockstring.
   * This way (multiple) modules can prevent a module from showing. See visibility locking below.
   */
  lockString?: string;
  /**
   * When setting the force tag to true, the locking mechanism will be overwritten.
   * Use this option with caution.
   * It's considered best practice to let the usage of the force option be use- configurable.
   */
  force?: boolean;
}

export interface IHideOptions {
  /**
   * When setting lock string, the module can not be shown without passing the correct lockstring.
   * This way (multiple) modules can prevent a module from showing. See visibility locking below.
   */
  lockString?: string;
}

export interface IClientModuleInstance {
  /**
   * If you want to create a path to a file in your module folder, use the file() method.
   * It returns the path to the filename given as the attribute.
   * Is method comes in handy when configuring the getScripts and getStyles methods.
   * @param filename  The name of the file you want to create the path for.
   */
  file(filename: string): string;

  /**
   * If you want to create a path to a file in your module folder, use the file() method.
   * It returns the path to the filename given as the attribute.
   * Is method comes in handy when configuring the getScripts and getStyles methods.
   * @param speed Optional. Animation speed in milliseconds.
   */
  updateDom(speed?: number): void;

  /**
   * If you want to send a notification to all other modules, use the sendNotification(notification, payload).
   * All other modules will receive the message via the notificationReceived method.
   * In that case, the sender is automatically set to the instance calling the sendNotification method.
   * @param notification The notification identifier.
   * @param payload Optional. A notification payload.
   */
  sendNotification(notification: string, payload?: any): void;

  /**
   * If you want to send a notification to the node_helper, use the sendSocketNotification(notification, payload).
   * Only the node_helper of this module will receive the socket notification.
   * @param notification The notification identifier.
   * @param payload Optional. A notification payload.
   */
  sendSocketNotification(notification: string, payload?: any): void;

  /**
   * To hide a module, you can call the `hide(speed, callback)` method.
   * You can call the hide method on the module instance itself using `this.hide()`,
   * but of course you can also hide another module using `anOtherModule.hide()`.
   *
   * @param speed Optional (Required when setting callback or options), The speed of the hide animation in milliseconds.
   * @param callback Optional, The callback after the hide animation is finished.
   * @param options Optional, Object with additional options for the hide action (see below). (Introduced in version: 2.1.0.)
   */
  hide(speed?: number, callback?: () => void, options?: IHideOptions): void;

  /**
   * To show a module, you can call the `show(speed, callback)` method.
   * You can call the show method on the module instance itself using `this.show()`,
   * but of course you can also show another module using `anOtherModule.show()`.
   *
   * @param speed Optional (Required when setting callback or options), The speed of the show animation in milliseconds.
   * @param callback Optional, The callback after the show animation is finished.
   * @param options Optional, Object with additional options for the show action (see below). (Introduced in version: 2.1.0.)
   */
  show(speed?: number, callback?: () => void, options?: IShowOptions): void;

  /**
   * The Magic Mirror contains a convenience wrapper for `l18n`.
   * You can use this to automatically serve different translations for your modules based on the user's `language` configuration.
   *
   * If no translation is found, a fallback will be used. The fallback sequence is as follows:
   * * Translation as defined in module translation file of the user's preferred language.
   * * Translation as defined in core translation file of the user's preferred language.
   * * Translation as defined in module translation file of the fallback language (the first defined module translation file).
   * * Translation as defined in core translation file of the fallback language (the first defined core translation file).
   * * The key (identifier) of the translation.
   *
   * When adding translations to your module, it's a good idea to see if an apropriate
   * translation is already available in the [core translation files](https://github.com/MichMich/MagicMirror/tree/master/translations).
   * This way, your module can benefit from the existing translations.
   *
   * @param identifier Identifier of the string that should be translated.
   */
  translate(identifier: string): void;

  /**
   * The name of the module.
   */
  name: string;
  /**
   * This is a unique identifier for the module instance.
   */
  identifier: string;
  /**
   * This represents if the module is currently hidden (faded away).
   */
  hidden: boolean;
  /**
   * The configuration of the module instance as set in the user's `config.js` file.
   * This config will also contain the module's defaults if these properties are not over-written by the user config.
   */
  config: any;
  /**
   * The data object contain additional metadata about the module instance.
   */
  data: {
    /**
     * The classes which are added to the module dom wrapper.
     */
    classes: string;
    /**
     * The filename of the core module file.
     */
    file: string;
    /**
     * The path of the module folder.
     */
    path: string;
    /**
     * The header added to the module.
     */
    header: string;
    /**
     * The position in which the instance will be shown.
     */
    position: string;
  };
}

export interface IClientModuleProperties {
  defaults?: object;
  requiresVersion?: string;
  start?(this: IClientModuleProperties & IClientModuleInstance): void;
  getHeader?(this: IClientModuleProperties & IClientModuleInstance): string;
  getTemplate?(this: IClientModuleProperties & IClientModuleInstance): string;
  getTemplateData?(this: IClientModuleProperties & IClientModuleInstance): object;
  notificationReceived?(notification: string, payload: any, sender: object): void;
  socketNotificationReceived?(notification: string, payload: any): void;
  suspend?(this: IClientModuleProperties & IClientModuleInstance): void;
  resume?(this: IClientModuleProperties & IClientModuleInstance): void;
  getDom?(this: IClientModuleProperties & IClientModuleInstance): HTMLElement;
  getStyles?(this: IClientModuleProperties & IClientModuleInstance): string[];
  [key: string]: any;
}

export interface IModuleRegister {
  register(moduleName: string, moduleProperties: IClientModuleProperties): void;
}

export declare const Module: IModuleRegister;
