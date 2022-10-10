import { EventDispatcher } from '../utils';
import { ChartZoomMouse } from './mouse';
import { ChartZoomTouch } from './touch';
import { ChartZoomWheel } from './wheel';
export const defaultAxisOptions = {
    minDomain: -Infinity,
    maxDomain: Infinity,
    minDomainExtent: 0,
    maxDomainExtent: Infinity,
};
export const defaultOptions = {
    panMouseButtons: 1 | 2 | 4,
    touchMinPoints: 1,
};
export function resolveOptions(defaults, o) {
    if (!o)
        o = {};
    if (!defaultOptions.isPrototypeOf(o))
        Object.setPrototypeOf(o, defaultOptions);
    const resolveAxis = (ao) => {
        if (ao && !defaults.isPrototypeOf(ao))
            Object.setPrototypeOf(ao, defaults);
    };
    resolveAxis(o.x);
    resolveAxis(o.y);
    return o;
}
export class ChartZoom {
    constructor(el, options) {
        this.scaleUpdated = new EventDispatcher();
        options = options !== null && options !== void 0 ? options : {};
        this.options = resolveOptions(defaultAxisOptions, options);
        this.touch = new ChartZoomTouch(el, this.options);
        this.mouse = new ChartZoomMouse(el, this.options);
        this.wheel = new ChartZoomWheel(el, this.options);
        const cb = () => this.scaleUpdated.dispatch();
        this.touch.scaleUpdated.on(cb);
        this.mouse.scaleUpdated.on(cb);
        this.wheel.scaleUpdated.on(cb);
    }
    onScaleUpdated(callback) {
        this.scaleUpdated.on(callback);
    }
    /** Call this when scale updated outside */
    update() {
        this.touch.update();
    }
}
//# sourceMappingURL=index.js.map