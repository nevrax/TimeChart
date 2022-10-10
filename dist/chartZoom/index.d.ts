import { CapableElement, ChartZoomOptions, ResolvedOptions } from "./options";
export declare const defaultAxisOptions: {
    readonly minDomain: number;
    readonly maxDomain: number;
    readonly minDomainExtent: 0;
    readonly maxDomainExtent: number;
};
export declare const defaultOptions: {
    readonly panMouseButtons: number;
    readonly touchMinPoints: 1;
};
declare type WithDefaults<T, TDefault> = {
    x?: T & TDefault;
    y?: T & TDefault;
} & typeof defaultOptions;
export declare function resolveOptions<T, TDefault extends Object>(defaults: TDefault, o?: {
    x?: T;
    y?: T;
}): WithDefaults<T, TDefault>;
export declare class ChartZoom {
    options: ResolvedOptions;
    private touch;
    private mouse;
    private wheel;
    private scaleUpdated;
    constructor(el: CapableElement, options?: ChartZoomOptions);
    onScaleUpdated(callback: () => void): void;
    /** Call this when scale updated outside */
    update(): void;
}
export {};
