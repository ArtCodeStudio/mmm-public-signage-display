import { Application } from 'express';
import { Server } from 'socket.io';

// See also ../../@types/node_helper/index.d.ts
export interface INodeHelperProperties {
  name: string;
  path: string;
  expressApp: Application;
  io: Server;
}
