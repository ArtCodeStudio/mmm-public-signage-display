import { IClientModuleInstance, IClientModuleInstanceProperties } from './magic-mirror-client-module';
import { Socket } from 'socket.io-client';

export interface IClientModuleInstanceArray extends Array<IClientModuleInstance> {
  /**
   * If you want to make a selection based on one or more class names, use the withClass method on a result of the MM.getModules() method.
   * The argument of the withClass(classname) method can be an array, or space separated string.
   * @param classnames The class names on which you want to filter.
   * @return An array with module instances.
   * @example
   * var modules = MM.getModules().withClass('classname');
   * var modules = MM.getModules().withClass('classname1 classname2');
   * var modules = MM.getModules().withClass(['classname1','classname2']);
   */
  withClass(classnames: string): IClientModuleInstanceArray;

  /**
   * If you to remove some modules from a selection based on a classname,
   * use the exceptWithClass method on a result of the MM.getModules() method.
   * The argument of the exceptWithClass(classname) method can be an array, or space separated string.
   * @param classnames The class names of the modules you want to remove from the results.
   * @return An array with module instances.
   * @example
   * var modules = MM.getModules().exceptWithClass('classname');
   * var modules = MM.getModules().exceptWithClass('classname1 classname2');
   * var modules = MM.getModules().exceptWithClass(['classname1','classname2']);
   */
  exceptWithClass(classnames: string): IClientModuleInstanceArray;

  /**
   * If you to remove a specific module instance from a selection based on a classname,
   * use the exceptWithClass method on a result of the MM.getModules() method.
   * This can be helpful if you want to select all module instances except the instance of your module.
   * @param module The reference to a module you want to remove from the results.
   * @return An array with module instances.
   * @example
   * var modules = MM.getModules().exceptModule(this);
   * var modules = MM.getModules().withClass('classname1').exceptwithClass('classname2').exceptModule(aModule);
   */
  exceptModule(module: IClientModuleInstance): IClientModuleInstanceArray;

  /**
   * If you want to perform an action on all selected modules, you can use the enumerate function:
   * @param callback The callback run on every instance.
   * @example
   * MM.getModules().enumerate(function(module) {
   *     Log.log(module.name);
   * });
   */
  enumerate(callback: (module: IClientModuleInstance) => void): void;
}

export interface IMagicMirrorHelper {
  getModules(): IClientModuleInstanceArray;
  hideModule(module: IClientModuleInstance, speed: number, callback: () => void, options: any);
  init();
  modulesStarted();
  sendNotification(notification: string, payload: any, sender: IClientModuleInstanceProperties);
  showModule(module: IClientModuleInstance, speed: number, callback: () => void, options: any);
  updateDom(module: IClientModuleInstance, speed: number);
}
