import { IMagicMirrorHelper, IMMLog, IClientModuleInstance } from '../interfaces';

export class SocketService {

  protected socketModule = io('/mmm-public-signage-display');

  constructor(
    protected readonly magicMirrorHelper: IMagicMirrorHelper,
    protected readonly magicMirrorLogger: IMMLog,
    protected readonly magicMirrorModule: IClientModuleInstance,
  ) {

  }

  /**
   * Forward `*` notifications to all modules
   */
  public initNotificationForwarding() {
    this.socketModule.on('*', (notification: string, data: any) => {
      this.magicMirrorLogger.log(`[${this.magicMirrorModule.name}] * notification`, notification, data);
      this.magicMirrorHelper.sendNotification(notification, data, this.magicMirrorModule);
    });
  }
}
