type MathjaxInputType = "latex" | "mathml" | "asciimath";
declare function rendermath(input: string, type: MathjaxInputType, container: HTMLElement, opts?: Record<string, any>): Promise<void>;
declare function initmathjax(): Promise<Record<string, any>>;
export { MathjaxInputType, rendermath, initmathjax };
