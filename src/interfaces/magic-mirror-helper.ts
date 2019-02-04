import { IClientModuleInstance } from './magic-mirror-client-module';

export interface IMagicMirrorHelper {
  getModules(): IClientModuleInstance[];
}
