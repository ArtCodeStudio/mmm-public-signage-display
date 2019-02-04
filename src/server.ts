import { NestModuleOptions } from './interfaces';
import NodeHelper = require('node_helper');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app.module';
import { Application, static as ExpressStatic } from 'express';
import { LoggerService } from './server/logger.service';
import { resolve } from 'path';
import { inspect } from 'util';

const Log = new LoggerService('node_helper');

async function bootstrap(options: NestModuleOptions) {
  const app = await NestFactory.create(
    AppModule.forRoot(options),
    options.nodeHelper.expressApp,
  );
  const viewsDir = resolve('./modules/mmm-public-signage-display/src/server/view/templates');
  app.setViewEngine('pug');
  app.setBaseViewsDir(viewsDir);
  await app.init(); // not working without ???
  return app;
}

module.exports = NodeHelper.create({
  init() {
    Log.log(`[module-control/node_helper] init`);
  },
  start() {
    Log.log(`[${this.name}/node_helper] start`);
    return bootstrap({
      nodeHelper: this,
    });
  },
  // sendSocketNotification(notification: string, payload) {
  //   Log.log(`[${this.name}/node_helper] sendSocketNotification: ${notification} ${inspect(payload)}`);
  // },
  socketNotificationReceived(notification, payload) {
    Log.log(`[${this.name}/node_helper] socketNotificationReceived: ${notification} ${inspect(payload)}`);
    this.sendSocketNotification(`got notification ${notification}`, payload);
  },
  stop() {
    Log.log(`[${this.name}/node_helper] stop`);
  },
});
