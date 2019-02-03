/* tslint:disable:no-console */
import { Injectable, Logger, LoggerService as ALoggerService } from '@nestjs/common';
import * as Debug from 'debug';

@Injectable()
export class LoggerService extends Logger implements ALoggerService {
  public debug: Debug.IDebugger;
  public group = console.group;
  public groupCollapsed = console.groupCollapsed;
  public groupEnd = console.groupEnd;
  public time = console.time;
  public timeEnd = console.timeEnd;
  public timeStamp = console.timeStamp;
  constructor(name: string = '') {
    super(name);
    this.debug = Debug(`${name}`);
  }
}
