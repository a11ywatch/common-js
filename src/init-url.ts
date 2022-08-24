// return a valid web URI to use
export const initUrl = (target: string, http?: boolean): string => {
  if (!target) {
    return "";
  }
  const httpEnabled = target.startsWith("https") || target.startsWith("http");
  const tpt = http ? "http" : "https";
  let url = String(target).toLowerCase(); // clean the url base

  // fix url transport
  if (url.startsWith("://")) {
    url = `${tpt}${url}`;
  }
  if (!httpEnabled) {
    url = `${tpt}://${url}`;
  }

  // If the url is not local host assume its safe to add .com
  if (!url.includes(".")) {
    if (
      !(
        (
          url.includes("localhost") ||
          url.includes("127.0.0.1") ||
          url.split(":").length - 1 >= 2
        ) // contains port no come
      )
    ) {
      url = `${url}.com`;
    }
  }

  return url;
};
