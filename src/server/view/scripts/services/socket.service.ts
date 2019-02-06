import { Debug } from '@ribajs/core';
import { EventEmitter } from 'events';
import io from 'socket.io-client';

export class SocketService extends EventEmitter {

  public static instance?: SocketService;

  /**
   * @see https://github.com/MichMich/MagicMirror/blob/master/js/socketclient.js
   */
  protected moduleSocket?: SocketIOClient.Socket;
  /**
   * https://github.com/MichMich/MagicMirror/blob/master/js/socket.js
   */
  protected globalSocket?: SocketIOClient.Socket;
  protected debug = Debug('services:SocketService');

  constructor() {
    super();
    this.debug('constructor');
    if (SocketService.instance) {
      return SocketService.instance;
    }
    this.init();
    SocketService.instance = this;
  }

  /**
   * If you want to send a notification to the node_helper, use the sendSocketNotification(notification, payload).
   * Only the node_helper of this module will receive the socket notification.
   * @param notification The notification identifier.
   * @param payload Optional. A notification payload.
   */
  public sendSocketNotification(notification: string, payload: any = {}) {
    this.debug('sendSocketNotification', notification, payload);
    this.emit(notification, payload);
    if (this.moduleSocket) {
      this.moduleSocket.emit(notification, payload);
    }
  }

  /**
   * Send notification to all modules
   * @param notification
   * @param payload
   */
  public sendGlobalNotification(notification: string, payload: any = {}) {
    this.debug('sendSocketNotification', notification, payload);
    this.emit(notification, payload);
    if (this.moduleSocket) {
      this.moduleSocket.emit(`*:${notification}`, payload);
    }
  }

  protected getModuleSocket(moduleName: string): SocketIOClient.Socket {
    return io('/' + moduleName);
  }

  protected async init() {
    this.debug('init');
    this.globalSocket = io('/') as SocketIOClient.Socket;
    this.moduleSocket = this.getModuleSocket('mmm-public-signage-display');

    this.moduleSocket.on('connect', () => {
      this.debug('module connect');
    });

    this.moduleSocket.on('exception', (data: any) => {
      console.error('module exception', data);
    });

    this.moduleSocket.on('disconnect', (data: any) => {
      this.debug('module disconnect', data);
    });

    // register catch all.
    this.moduleSocket.on('*', (notification: string, payload: any) => {
      if (notification !== '*') {
        this.debug('module notification', notification, payload);
        this.emit(notification, payload, this.moduleSocket);
      }
    });
  }
}
