export type Type = 'notification' | 'alert' | 'marquee';

export interface IAlertParams {
  type?: Type;
  /**
   * The title of the alert.
   * **Possible values**: `text` or `html`
   */
  title: string;
  /**
   * The message of the alert.
   * **Possible values**: `text` or `html`
   */
  message: string;
  /**
   * Image to show in the alert
   * **Possible values**: `url` `path`
   * **Default value**: `none`
   */
  imageUrl?: string;
  /**
   * Font Awesome icon to show in the alert
   * **Possible values**: See Font [Awsome website](https://fontawesome.com/icons?from=io).
   * **Default value**: `none`
   */
  imageFA?: string;
  /**
   * Height of the image.
   * **Possible values**: `intpx`
   * **Default value**: `80px`
   */
  imageHeight?: string;
  /**
   * How long the alert should stay visible in ms.
   * **Important**: If you do not use the `timer`, it is your duty to hide the alert by using `self.sendNotification("HIDE_ALERT");`!
   */
  timer?: number;
}
