export interface MMModuleInstance {
  file(filename: string): string;
  updateDom(speed: number): void;
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

export interface IModuleProperties {
  defaults?: object;
  requiresVersion?: string;
  start?(this: IModuleProperties & MMModuleInstance): void;
  getHeader?(this: IModuleProperties & MMModuleInstance): string;
  getTemplate?(this: IModuleProperties & MMModuleInstance): string;
  getTemplateData?(this: IModuleProperties & MMModuleInstance): object;
  notificationReceived?(notification: string, payload: any, sender: object): void;
  socketNotificationReceived?(notification: string, payload: any): void;
  suspend?(this: IModuleProperties & MMModuleInstance): void;
  resume?(this: IModuleProperties & MMModuleInstance): void;
  getDom?(this: IModuleProperties & MMModuleInstance): HTMLElement;
  getStyles?(this: IModuleProperties & MMModuleInstance): string[];
  [key: string]: any;
}

export interface IMMModule {
  register(moduleName: string, moduleProperties: IModuleProperties): void;
}

export declare const Module: IMMModule;
