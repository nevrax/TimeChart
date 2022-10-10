import { ChartZoom, defaultAxisOptions, resolveOptions, } from "../chartZoom";
export class TimeChartZoom {
    constructor(chart, options) {
        this.options = options;
        this.registerZoom(chart);
    }
    applyAutoRange(o, dataRange) {
        if (!o)
            return;
        if (!o.autoRange) {
            delete o.minDomain;
            delete o.maxDomain;
            return;
        }
        let [min, max] = o.scale.domain();
        if (dataRange) {
            min = Math.min(min, dataRange.min);
            max = Math.max(max, dataRange.max);
        }
        o.minDomain = min;
        o.maxDomain = max;
    }
    registerZoom(chart) {
        if (this.options.x)
            Object.setPrototypeOf(this.options.x, Object.assign(Object.create(defaults), { scale: chart.model.xScale }));
        if (this.options.y)
            Object.setPrototypeOf(this.options.y, Object.assign(Object.create(defaults), { scale: chart.model.yScale }));
        const o = this.options;
        const z = new ChartZoom(chart.contentBoxDetector.node, o);
        chart.model.updated.on(() => {
            this.applyAutoRange(o.x, chart.model.xRange);
            this.applyAutoRange(o.y, chart.model.yRange);
            z.update();
        });
        z.onScaleUpdated(() => {
            chart.options.xRange = null;
            chart.options.yRange = null;
            chart.options.realTime = false;
            chart.update();
        });
    }
}
const defaults = Object.assign(Object.create(defaultAxisOptions), {
    autoRange: true,
});
export class TimeChartZoomPlugin {
    constructor(o) {
        this.options = resolveOptions(defaults, o);
    }
    apply(chart) {
        return new TimeChartZoom(chart, this.options);
    }
}
//# sourceMappingURL=chartZoom.js.map