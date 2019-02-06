import { Utils, Debug } from '@ribajs/core';
import { IMagicMirrorConfig } from '../interfaces';

export class ConfigService {

  public static instance?: ConfigService;

  public static get(): Promise<IMagicMirrorConfig> {
    return Utils.getJSON('/config');
  }

  protected debug = Debug('services:ConfigService');

  constructor() {
    this.debug('constructor');
    if (ConfigService.instance) {
      return ConfigService.instance;
    }
    ConfigService.instance = this;
  }
}
