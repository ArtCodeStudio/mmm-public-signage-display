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

  hide(speed?: number, callback?: () => void, options?: {
    lockString: string,
  }): void;
  show(speed?: number, callback?: () => void, options?: {
    lockString: string;
    force: boolean;
  }): void;
  translate(identifier: string): void;
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
