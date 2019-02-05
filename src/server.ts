import { INodeHelperProperties } from './interfaces';
import NodeHelper = require('node_helper');
import { LoggerService } from './server/logger.service';
import { resolve } from 'path';
import { inspect } from 'util';
import { controller } from './server/controller';

const Log = new LoggerService('node_helper');
const bootstrap = (nodeHelper: INodeHelperProperties) => {
  const viewsDir = resolve('./modules/mmm-public-signage-display/src/server/view/templates');
  nodeHelper.expressApp.set('view engine', 'pug');
  nodeHelper.expressApp.set('views', viewsDir);
  // nodeHelper.io.of('/')
  // .on('connection', (socket: SocketIO.Socket) => {
  //   Log.log('connection');
  //   // socket.join('global');
  //   // socket.nsp.emit('hello');
  // });
  // nodeHelper.io.of('/mmm-public-signage-display')
  // .on('connection', (socket: SocketIO.Socket) => {
  //   Log.log('connection');
  //   // socket.join('global');
  //   // socket.nsp.emit('hello');
  // });
  controller(nodeHelper.expressApp);
  // await app.init(); // not working without ???
  return nodeHelper;
};

module.exports = NodeHelper.create({
  init() {
    Log.log(`[mmm-public-signage-display/node_helper] init`);
  },
  start() {
    Log.log(`[${this.name}/node_helper] start`);
    bootstrap(this);

    // setInterval(() => {
    //   this.io.sockets.emit('TEST_LOOP', {});
    // }, 1000);
  },
  socketNotificationReceived(notification: string, payload: any) {
    Log.log(`[${this.name}/node_helper] socketNotificationReceived: ${notification} ${inspect(payload)}`);
    if (payload.global) {
      // this.sendSocketNotification(notification, payload);
      Log.log(`[${this.name}/node_helper] sendSocketNotification ${inspect(this.io.sockets)}`);
      // this.sendSocketNotification(notification, payload);
      this.io.sockets.emit(notification, payload);
      // this.io.sockets.emit('*', notification, payload);
      // this.io.sockets.emit('notification', {
      //   notification,
      //   sender: null,
      //   payload,
      // });
      // this.io.of('http://localhost:8080').emit('notification', {
      //   notification,
      //   sender: null,
      //   payload,
      // });
      // this.io.of('/').emit('notification', {
      //   notification,
      //   sender: null,
      //   payload,
      // });
      // this.io.of('/mmm-public-signage-display')
      // .emit('notification', {
      //   notification,
      //   sender: null,
      //   payload,
      // });
      // this.io.of('/alert').emit('notification', {
      //   notification,
      //   sender: null,
      //   payload,
      // });
      // this.io.of('http://localhost:8080').emit(notification, payload);
      // this.io.of('/mmm-public-signage-display').emit(notification, payload);
      // this.io.of('/').to('global').emit(notification, payload);
      // this.io.of('/mmm-public-signage-display').to('global').emit(notification, payload);
      // this.io.of('http://localhost:8080/alert').emit(notification, payload);
      // this.io.of('/alert').emit(notification, payload);
    }
  },
  stop() {
    Log.log(`[${this.name}/node_helper] stop`);
  },
});
