import core from "../core";
import { ResolvedZoomOptions, TimeChartPlugins, ZoomOptions } from "../options";
import { TimeChartPlugin } from ".";
export declare class TimeChartZoom {
    options: ResolvedZoomOptions;
    constructor(chart: core<TimeChartPlugins>, options: ResolvedZoomOptions);
    private applyAutoRange;
    private registerZoom;
}
export declare class TimeChartZoomPlugin implements TimeChartPlugin<TimeChartZoom> {
    options: ResolvedZoomOptions;
    constructor(o?: ZoomOptions);
    apply(chart: core<TimeChartPlugins>): TimeChartZoom;
}
