export function removeTrailingSlash(url: string) {
  if (url) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  }
  return "";
}
