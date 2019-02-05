import NodeHelper = require('node_helper');
import { LoggerService } from './server/logger.service';
import { inspect } from 'util';
import { bootstrap } from './server/bootstrap';
import { SocketService } from './server/socket.service';

const Log = new LoggerService('node_helper');
let socketService: SocketService = null;

module.exports = NodeHelper.create({
  init() {
    Log.log(`[mmm-public-signage-display/node_helper] init`);
  },
  start() {
    Log.log(`[${this.name}/node_helper] start`);
    socketService = new SocketService(this.io);
    bootstrap(this);
  },
  socketNotificationReceived(notification: string, payload: any) {
    Log.log(`[${this.name}/node_helper] socketNotificationReceived: ${notification} ${inspect(payload)}`);
    socketService.forwardNotification(notification, payload);
  },
  stop() {
    Log.log(`[${this.name}/node_helper] stop`);
  },
});
