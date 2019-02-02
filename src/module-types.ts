export interface ModuleInstance {
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

type ModuleProperties = {
  defaults?: object,
  requiresVersion?: string;
  start?(this: ModuleProperties & ModuleInstance): void,
  getHeader?(this: ModuleProperties & ModuleInstance): string,
  getTemplate?(this: ModuleProperties & ModuleInstance): string,
  getTemplateData?(this: ModuleProperties & ModuleInstance): object,
  notificationReceived?(notification: string, payload: any, sender: object): void,
  socketNotificationReceived?(notification: string, payload: any): void,
  suspend?(this: ModuleProperties & ModuleInstance): void,
  resume?(this: ModuleProperties & ModuleInstance): void,
  getDom?(this: ModuleProperties & ModuleInstance): HTMLElement,
  getStyles?(this: ModuleProperties & ModuleInstance): string[],
  [key: string]: any,
};

export declare const Module: {
  register(moduleName: string, moduleProperties: ModuleProperties): void;
};

export declare const Log: {
  info(message?: any, ...optionalParams: any[]): void,
  log(message?: any, ...optionalParams: any[]): void,
  error(message?: any, ...optionalParams: any[]): void,
  warn(message?: any, ...optionalParams: any[]): void,
  group(groupTitle?: string, ...optionalParams: any[]): void,
  groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void,
  groupEnd(): void,
  time(timerName?: string): void,
  timeEnd(timerName?: string): void,
  timeStamp(timerName?: string): void,
};