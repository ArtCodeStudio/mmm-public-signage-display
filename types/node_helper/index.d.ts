// https://github.com/MichMich/MagicMirror/blob/master/js/main.js
declare module 'node_helper' {
  import { Application } from 'express';
  import { Server } from 'socket.io';
  interface INodeHelperProperties {
    name: string;
    path: string;
    expressApp: Application;
    io: Server; // TODO type
    sendSocketNotification(this: INodeHelperProperties, notification: string, payload?: any): void;
  }
  export { INodeHelperProperties };
  export function create(config: {
    requiresVersion?: string;
    init(this: INodeHelperProperties): void;
    start(this: INodeHelperProperties): void;
    stop(this: INodeHelperProperties): void;
    socketNotificationReceived(this: INodeHelperProperties, notification: string, payload?: any): void;
    [key: string]: {};
  }): void;
}