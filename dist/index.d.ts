declare function renderasciimath(
    input: string,
    container: HTMLElement
): Promise<void>;
declare function rendermathml(
    input: string,
    container: HTMLElement
): Promise<void>;
declare function renderlatex(
    input: string,
    container: HTMLElement
): Promise<void>;
declare function initmathjax(): Promise<Record<string, any>>;
export { renderasciimath, rendermathml, renderlatex, initmathjax };
