import { IMagicMirrorHelper, IMMLog, IClientModuleInstanceProperties } from '../interfaces';
import { EventEmitter } from 'events';

export class SocketService extends EventEmitter {

  public static instance?: SocketService;

  protected socketModule = io('/mmm-public-signage-display');

  constructor(
    protected readonly magicMirrorHelper: IMagicMirrorHelper,
    protected readonly magicMirrorLogger: IMMLog,
    protected readonly magicMirrorModule: IClientModuleInstanceProperties,
  ) {
    super();
    this.magicMirrorLogger.log('SocketService constructor', magicMirrorModule);
    if (SocketService.instance) {
      return SocketService.instance;
    }
    SocketService.instance = this;
  }

  /**
   * Forward `*` notifications to all modules
   */
  public initNotificationForwarding() {
    this.socketModule.on('*', (notification: string, data: any) => {
      this.magicMirrorLogger.log(`[${this.magicMirrorModule.name}] * notification`, notification, data);
      this.magicMirrorHelper.sendNotification(notification, data, this.magicMirrorModule);
      this.emit(notification, data, this.magicMirrorModule);
    });
  }
}
