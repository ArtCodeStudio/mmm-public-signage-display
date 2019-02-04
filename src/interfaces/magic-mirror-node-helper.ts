import { Application } from 'express';
import { Client } from 'socket.io';

// See also ../../@types/node_helper/index.d.ts
export interface INodeHelperProperties {
  name: string;
  path: string;
  expressApp: Application;
  io: Client; // TODO type
}
