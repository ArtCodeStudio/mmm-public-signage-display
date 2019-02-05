import { IClientModuleInstance } from './magic-mirror-client-module';
import { Socket } from 'socket.io-client';

export interface IMagicMirrorHelper {
  getModules(): IClientModuleInstance[];
  hideModule(module: IClientModuleInstance, speed: number, callback: () => void, options: any);
  init();
  modulesStarted();
  sendNotification(notification: string, payload: any, sender: IClientModuleInstance);
  showModule(module: IClientModuleInstance, speed: number, callback: () => void, options: any);
  updateDom(module: IClientModuleInstance, speed: number);
}
