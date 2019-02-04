import { Injectable, Inject } from '@nestjs/common';
import { INodeHelperProperties } from '../interfaces/magic-mirror-node-helper';
import { LoggerService } from './logger.service';
// import { inspect } from 'util';

@Injectable()
export class BackendService {
  protected logger = new LoggerService('BackendController');
  constructor(
    @Inject('NodeHelper') protected readonly nodeHelper: INodeHelperProperties,
  ) {
    // this.logger.log('NodeHelper');
    // this.logger.log(inspect(nodeHelper));
  }
  dashboard() {

    return {
      dataset: {
        title: 'Dashboard',
        namespace: 'dashboard',
      },
    };
  }
}
