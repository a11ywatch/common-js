interface Source {
    url: string;
    domain: string | null;
    pageUrl: string;
    cdnSourceStripped: string;
    cdnJsPath: string;
    cdnMinJsPath: string;
}
export declare const sourceBuild: (urlMap: string, userId?: string | number | undefined) => Source;
export {};
