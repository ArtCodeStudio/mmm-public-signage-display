import { IMagicMirrorHelper, IMMLog, IClientModuleInstance } from '../interfaces';

export class SocketService {

  protected socketModule: SocketIO.Namespace;

  constructor(
    protected readonly io: SocketIO.Server,
  ) {
    this.socketModule = this.io.of('mmm-public-signage-display');
  }

  /**
   * Forward `*` notifications to all modules.
   * Sends notifications to client (The client will redirects it to all modules)
   */
  public forwardNotification(notification: string, payload: any) {
    this.socketModule.emit('*', notification, payload);
  }
}
