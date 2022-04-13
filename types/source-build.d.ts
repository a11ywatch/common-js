interface Source {
    domain: string | null;
    pageUrl: string;
    cdnSourceStripped: string;
    cdnJsPath: string;
    cdnMinJsPath: string;
    pathname: string;
}
export declare const sourceBuild: (urlMap: string, userId?: string | number | undefined) => Source;
export {};
