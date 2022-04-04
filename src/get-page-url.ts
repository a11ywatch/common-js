export function removeTrailingSlash(url: string) {
  if (url) {
    return String(url).replace(/\/+$/, "");
  }
  return "";
}
