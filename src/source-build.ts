import { initUrl } from "./init-url";
import { removeTrailingSlash } from "./get-page-url";
import { stringFormater } from "./string-formater";

interface Source {
  domain: string | null; // hostname of page
  pageUrl: string; // url of the page
  cdnSourceStripped: string;
  cdnJsPath: string;
  cdnMinJsPath: string;
  pathname: string; // pathname of url
}

export const sourceBuild = (
  urlMap: string,
  userId?: string | number
): Source => {
  const pageUrl = removeTrailingSlash(initUrl(urlMap || ""));

  let domain;
  let pathname;

  try {
    const urlObject = new URL(pageUrl);
    domain = urlObject.hostname;
    pathname = urlObject.pathname;
  } catch (e) {
    console.error(e);
  }

  const cdnSourceStripped = stringFormater.formatCdn(pageUrl);
  const userPath = typeof userId !== "undefined" ? `-${userId}` : "";
  const basePath =
    domain && cdnSourceStripped
      ? `${domain}/${encodeURIComponent(cdnSourceStripped)}${userPath}`
      : null;
  const cdnJsPath = basePath ? `${basePath}.js` : "";
  const cdnMinJsPath = basePath ? `${basePath}.min.js` : "";

  return {
    domain,
    cdnSourceStripped: `${cdnSourceStripped}${userPath}`,
    cdnJsPath,
    cdnMinJsPath,
    pageUrl,
    pathname,
  };
};
