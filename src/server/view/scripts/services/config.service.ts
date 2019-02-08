import { Utils, Debug } from '@ribajs/core';
import { IMagicMirrorConfig } from '../interfaces';

export class ConfigService {

  public static instance?: ConfigService;

  public static async get(): Promise<IMagicMirrorConfig> {
    if (this.config) {
      return this.config;
    }
    return Utils.getJSON('/config')
    .then((config) => {
      this.config = config;
      return config;
    });
  }

  protected static config?: IMagicMirrorConfig;

  protected debug = Debug('services:ConfigService');

  constructor() {
    this.debug('constructor');
    if (ConfigService.instance) {
      return ConfigService.instance;
    }
    ConfigService.instance = this;
  }
}
