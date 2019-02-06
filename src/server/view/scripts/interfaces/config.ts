export interface IMagicMirrorModuleConfig {
  /**
   * The name of the module. This can also contain the subfolder. Valid examples include clock, default/calendar and custommodules/mymodule.
   */
  module: string;
  /**
   * The location of the module in which the module will be loaded.
   * . This field is optional but most modules require this field to set. Check the documentation of the module for more information. Multiple modules with the same position will be ordered based on the order in the configuration file.
   */
  position?: 'top_bar' | 'top_left' | 'top_center' |  'top_right' | 'upper_third' | 'middle_center' | 'lower_third' | 'bottom_left' | 'bottom_center' | 'bottom_right' | 'bottom_bar' | 'fullscreen_above' | 'fullscreen_below';

  /**
   * Additional classes which are passed to the module. The field is optional.
   */
  classes?: string;

  /**
   * To display a header text above the module, add the header property. This field is optional.
   */
  header?: string;

  /**
   * Set disabled to `true` to skip creating the module. This field is optional.
   */
  disabled?: boolean;

  /**
   * An object with the module configuration properties. Check the documentation of the module for more information. This field is optional, unless the module requires extra configuration.
   */
  config: any;
}

export interface IMagicMirrorConfig {
  address: string; // '0.0.0.0',
  port: number; // 8080,
  kioskmode: boolean; // false,
  electronOptions: any; // { },
  ipWhitelist: string[]; // ['127.0.0.1', '::ffff:127.0.0.1', '::1'],
  language: string; // 'de',
  timeFormat: 24 | 12;
  units: 'metric' | 'imperial';
  zoom: number; // 1,
  customCss: string; // 'css/custom.css',
  modules: IMagicMirrorModuleConfig[];
  paths: {
    modules: string; // 'modules',
    vendor: string; // 'vendor'
  };
}
