import { resolve } from 'path';
import { controller } from '../server/controller';
import { INodeHelperProperties } from '../interfaces';

export const bootstrap = (nodeHelper: INodeHelperProperties) => {
  const viewsDir = resolve('./modules/mmm-public-signage-display/src/server/view/templates');
  nodeHelper.expressApp.set('view engine', 'pug');
  nodeHelper.expressApp.set('views', viewsDir);
  controller(nodeHelper.expressApp);
  return nodeHelper;
};
