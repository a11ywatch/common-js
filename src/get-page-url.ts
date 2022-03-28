export function getPageUrl(url: string) {
  if (url?.length) {
    const lchar = url.length - 1;

    return url[lchar] === "/" ? url.substring(0, lchar) : url;
  }
  return "";
}
