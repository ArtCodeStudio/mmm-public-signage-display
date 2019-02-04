// https://github.com/MichMich/MagicMirror/blob/master/js/main.js
declare module "node_helper" {
  import { Application } from 'express';
  import { Client } from 'socket.io';
  interface INodeHelperProperties {
    name: string;
    path: string;
    expressApp: Application;
    io: Client; // TODO type
  }
  export { INodeHelperProperties };
  export function create(config: {
    requiresVersion?: string;
    init(this: INodeHelperProperties): void;
    start(this: INodeHelperProperties): void;
    stop(this: INodeHelperProperties): void;
    socketNotificationReceived(this: INodeHelperProperties, notification: string, payload?: any): void;
    sendSocketNotification(this: INodeHelperProperties, notification: string, payload?: any): void;
    [key: string]: {};
  }): void;
}

import { Client } from 'socket.io';

export interface INodeHelper {
    name: string;
    io: Client;
    path: string;
}
