/* tslint:disable:no-console */
import * as Debug from 'debug';

export class LoggerService {
  public debug: Debug.IDebugger;
  public log = console.log;
  public warn = console.warn;
  public error = console.error;
  public group = console.group;
  public groupCollapsed = console.groupCollapsed;
  public groupEnd = console.groupEnd;
  public time = console.time;
  public timeEnd = console.timeEnd;
  public timeStamp = console.timeStamp;
  constructor(name: string = '') {
    this.debug = Debug(`${name}`);
  }
}
