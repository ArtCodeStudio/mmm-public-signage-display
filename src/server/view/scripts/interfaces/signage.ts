import { IMagicMirrorModuleConfig } from '../interfaces';
export type TimelineType = 'modules' | 'media';

export interface ISignageTimelineModule {
  module: IMagicMirrorModuleConfig;
  name: string;
  position: string;
  visible: boolean;
}

export interface ISignageTimeline {
  type: TimelineType;
  /**
   * Current module dropdown value
   */
  _module: IMagicMirrorModuleConfig;
  modules: ISignageTimelineModule[];
  hideOthers: boolean;
}
