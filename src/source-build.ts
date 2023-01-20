import { initUrl } from "./init-url";
import { removeTrailingSlash } from "./get-page-url";

interface Source {
  domain: string | null; // hostname of page
  pageUrl: string; // url of the page
  pathname: string; // pathname of url
}

export const sourceBuild = (
  urlMap: string,
): Source => {
  const pageUrl = removeTrailingSlash(initUrl(urlMap));

  let domain = "";
  let pathname = "";

  if(pageUrl) {
    try {
      const urlObject = new URL(pageUrl);
      domain = urlObject.hostname;
      pathname = urlObject.pathname;
    } catch (e) {
      console.error(e);
    }
  }

  return {
    domain,
    pageUrl,
    pathname,
  };
};
