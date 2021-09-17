declare const defaultoptions: {
    containerWidth: number;
    em: number;
    ex: number;
    family: string;
    lineWidth: number;
    scale: number;
};
type MathjaxInputType = "latex" | "mathml" | "asciimath";
declare function rendermath(input: string, type: MathjaxInputType, opts?: Partial<Record<string, any> & typeof defaultoptions>): Promise<string>;
export { MathjaxInputType, rendermath };
