type MathjaxInputType = "latex" | "mathml" | "asciimath";
declare function rendermath(input: string, type: MathjaxInputType, container?: HTMLElement, opts?: Record<string, any>): Promise<string>;
declare function initmathjax(): Promise<Record<string, any>>;
declare const defaultoptions: {
    containerWidth: number;
    em: number;
    ex: number;
    family: string;
    lineWidth: number;
    scale: number;
};
export { MathjaxInputType, rendermath, initmathjax, defaultoptions };
