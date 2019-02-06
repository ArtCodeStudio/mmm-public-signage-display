export type TimelineType = 'modules' | 'media';

export interface ISignageTimelineModule {
  module: string;
  position: string;
}

export interface ISignageTimeline {
  type: TimelineType;
  /**
   * Current module dropdown value
   */
  _module?: string;
  modules: ISignageTimelineModule[];
}
