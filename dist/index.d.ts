declare const defaultoptions: {
    containerWidth: number;
    em: number;
    ex: number;
    family: string;
    lineWidth: number;
    scale: number;
};
type MathjaxInputType = "latex" | "mathml" | "asciimath";
declare function rendermath(input: string, type: MathjaxInputType, container?: HTMLElement, opts?: Partial<Record<string, any> & typeof defaultoptions>): Promise<string>;
declare function initmathjax(): Promise<Record<string, any>>;
export { MathjaxInputType, rendermath, initmathjax, defaultoptions };
