/**
 * Represents the settings for a schedule.
 */
export interface IScheduleSettings {
  /**
   * The settings for weekly overtime.
   */
  ot_week: {
    /**
     * Specifies whether weekly overtime is enabled.
     */
    enabled: boolean;
    /**
     * The number of hours for weekly overtime.
     */
    hours: number;
    /**
     * The overtime multiplier for weekly overtime.
     */
    multiplier: number;
  };
  /**
   * The settings for daily overtime.
   */
  ot_day: {
    /**
     * Specifies whether daily overtime is enabled.
     */
    enabled: boolean;
    /**
     * The number of hours for daily overtime.
     */
    hours: number;
    /**
     * The overtime multiplier for daily overtime.
     */
    multiplier: number;
  };
  /**
   * Optional preset times for scheduling.
   */
  presetTimes?: {
    /**
     * The start time for a preset schedule.
     */
    start: string;
    /**
     * The end time for a preset schedule.
     */
    end: string;
  }[];
}

/**
 * The default schedule settings.
 */
export const DefaultScheduleSettings: IScheduleSettings = {
  ot_week: {
    enabled: true,
    hours: 40,
    multiplier: 1.5,
  },
  ot_day: {
    enabled: false,
    hours: 8,
    multiplier: 1.5,
  },
};
