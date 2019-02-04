import { Utils, Debug, IObserverSyncCallback } from '@ribajs/core';
import io from 'socket.io-client';
import { EventEmitter } from 'events';

export class SocketService extends EventEmitter {

  public static instance?: SocketService;

  /**
   * @see https://github.com/MichMich/MagicMirror/blob/master/js/socketclient.js
   */
  protected moduleSocket?: SocketIOClient.Socket;
  /**
   * https://github.com/MichMich/MagicMirror/blob/master/js/socket.js
   */
  // protected globalSocket?: SocketIOClient.Socket;
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
   * If you want to send a notification to all other modules, use the sendNotification(notification, payload).
   * All other modules will receive the message via the notificationReceived method.
   * In that case, the sender is automatically set to the instance calling the sendNotification method.
   * @param notification Alias for socket.emit
   * @param payload
   */
  // public sendNotification(notification: string, payload: any = {}) {
  //   if (this.globalSocket) {
  //     this.globalSocket.emit(notification, payload);
  //   }
  // }
  // public sendNotification(notification: string, payload: any = {}) {
  //   if (this.globalSocket) {
  //     this.globalSocket.emit('notification', {
  //       notification,
  //       payload,
  //       sender: this.globalSocket,
  //     });
  //   }
  // }

  /**
   * If you want to send a notification to the node_helper, use the sendSocketNotification(notification, payload).
   * Only the node_helper of this module will receive the socket notification.
   * @param notification The notification identifier.
   * @param payload Optional. A notification payload.
   */
  public sendSocketNotification(notification: string, payload: any = {}) {
    if (this.moduleSocket) {
      this.moduleSocket.emit(notification, payload);
    }
  }

  protected getModuleSocket(moduleName: string) {
    return io('/' + moduleName, {
      transports: ['polling'],
    });
  }

  protected async init() {
    this.debug('init');
    // this.globalSocket = io('/', {
    //   transports: ['polling'],
    // });
    this.moduleSocket = this.getModuleSocket('mmm-public-signage-display');

    this.moduleSocket.on('connect', () => {
      this.debug('module connect');
      this.sendSocketNotification('thank you module!');
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

    // this.globalSocket.on('connect', () => {
    //   this.debug('global connect');
    //   this.sendNotification('thank you global!');
    // });

    // this.globalSocket.on('exception', (data: any) => {
    //   console.error('global exception', data);
    // });

    // this.globalSocket.on('disconnect', (data: any) => {
    //   this.debug('global disconnect', data);
    // });

    // this.globalSocket.on('notification', (data: any) => {
    //   this.debug('global notification', data.notification, data.payload);
    //   this.emit(data.notification, data.payload, this.globalSocket);
    // });

  }

}
