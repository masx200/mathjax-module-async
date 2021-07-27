declare function rendermathml(
    input: string,
    container: HTMLElement
): Promise<void>;

declare function renderasciimath(
    input: string,
    container: HTMLElement
): Promise<void>;

declare function renderlatex(
    input: string,
    container: HTMLElement
): Promise<void>;
export { renderlatex, renderasciimath, rendermathml };
