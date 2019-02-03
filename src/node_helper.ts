import { IMMLog, IMagicMirrorHelper } from './interfaces';
import NodeHelper = require('node_helper');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app.module';
import { Application } from 'express';
import { LoggerService } from './server/logger.service';

const Log = new LoggerService('node_helper');
declare const MM: IMagicMirrorHelper;

async function bootstrap(expressApp: Application) {
  const app = await NestFactory.create(AppModule, expressApp);
  await app.listen(3000);
}

module.exports = NodeHelper.create({
  init() {
    Log.log(`[module-control/node_helper] init`);
  },
  start() {
    Log.log(`[${this.name}/node_helper] start`);
    bootstrap(this.expressApp);
  },
  sendSocketNotification(notification, payload) {
    Log.log(`[${this.name}/node_helper] sendSocketNotification: ${notification}`, payload);
  },
  socketNotificationReceived(notification, payload) {
    Log.log(`[${this.name}/node_helper] socketNotificationReceived: ${notification}`, payload);
  },
  stop() {
    Log.log(`[${this.name}/node_helper] stop`);
  },
});
