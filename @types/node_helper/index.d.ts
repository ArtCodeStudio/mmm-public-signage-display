
declare module "node_helper" {
  import { Application } from 'express';
  import { Client } from 'socket.io';
  interface NodeHelperProperties {
    name: string;
    path: string;
    expressApp: Application;
    io: Client; // TODO type
  }
  export { NodeHelperProperties };
  export function create(config: {
    requiresVersion?: string;
    init(this: NodeHelperProperties): void;
    start(this: NodeHelperProperties): void;
    stop(this: NodeHelperProperties): void;
    socketNotificationReceived(this: NodeHelperProperties, notification: string, payload?: any): void;
    sendSocketNotification(this: NodeHelperProperties, notification: string, payload?: any): void;
    [key: string]: {};
  }): void;
}