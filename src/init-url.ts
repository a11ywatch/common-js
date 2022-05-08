// return a valid web URI to use
export const initUrl = (target: string, http?: boolean): string => {
  if (!target) {
    return "";
  }

  let url = String(target).toLowerCase();

  const httpEnabled = url.startsWith("https") || url.startsWith("http");

  const tpt = http ? "http" : "https";

  // fix url transport
  if (url.startsWith("://")) {
    url = `${tpt}${url}`;
  }

  if (!httpEnabled) {
    url = `${tpt}://${url}`;
  }

  if (!url.includes(".")) {
    // If the url is not local host assume its safe to add .com
    if (!(url.includes("localhost") || url.includes("127.0.0.1"))) {
      url = `${url}.com`;
    }
  }

  return url;
};
