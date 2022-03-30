import { initUrl } from "./init-url";
import { getHostName } from "./get-host-name";
import { getPageUrl } from "./get-page-url";
import { stringFormater } from "./string-formater";

interface Source {
  url: string;
  domain: string | null;
  pageUrl: string;
  cdnSourceStripped: string;
  cdnJsPath: string;
  cdnMinJsPath: string;
}

export const sourceBuild = (
  urlMap: string,
  userId?: string | number
): Source => {
  const url = initUrl(urlMap || "");
  const domain = getHostName(url);
  const pageUrl = getPageUrl(url);
  const cdnSourceStripped = stringFormater.formatCdn(pageUrl);
  const userPath = typeof userId !== "undefined" ? `-${userId}` : "";
  const basePath =
    domain && cdnSourceStripped
      ? `${domain}/${encodeURIComponent(cdnSourceStripped)}${userPath}`
      : null;
  const cdnJsPath = basePath ? `${basePath}.js` : "";
  const cdnMinJsPath = basePath ? `${basePath}.min.js` : "";

  return {
    url,
    domain,
    pageUrl,
    cdnSourceStripped: `${cdnSourceStripped}${userPath}`,
    cdnJsPath,
    cdnMinJsPath,
  };
};
