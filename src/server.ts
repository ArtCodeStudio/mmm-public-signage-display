import { IMMLog, IMagicMirrorHelper } from './interfaces';
import NodeHelper = require('node_helper');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app.module';
import { Application, static as ExpressStatic } from 'express';
import { LoggerService } from './server/logger.service';
import { resolve, join } from 'path';
// import sassMiddleware = require('node-sass-middleware');

const Log = new LoggerService('node_helper');
declare const MM: IMagicMirrorHelper;

async function bootstrap(expressApp: Application) {
  const app = await NestFactory.create(AppModule, expressApp);
  const assetsDir = resolve('./modules/mmm-public-signage-display/server/public');
  const viewsDir = resolve('./modules/mmm-public-signage-display/src/server/view/templates');
  // const stylesSrc = resolve('./modules/mmm-public-signage-display/src/server/view/styles');
  // const stylesDest = resolve(assetsDir, 'styles');
  // expressApp.use(ExpressStatic(assetsDir)); // app.useStaticAssets(assetsDir);
  app.useStaticAssets(assetsDir);
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
    return bootstrap(this.expressApp);
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
