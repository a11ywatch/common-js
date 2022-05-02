import { URL } from "url";

const validTransport = (str) => {
  if (str.indexOf("http://") === 0 || str.indexOf("https://") === 0) {
    return true;
  }
  return false;
};

export function getHostName(url: string) {
  if (!url) {
    return "";
  }
  try {
    let targetUrl = url;
    if (!validTransport(url)) {
      targetUrl = `https://${url}`;
    }
    const { hostname } = new URL(targetUrl);
    return hostname;
  } catch (e) {
    console.error(e);
    return null;
  }
}

// TODO: REPLACE FOR URL
export const getHostAsString = new String(
  `function getHostName(url) {
    if (url) {
      try {
        let targetUrl = url;
        if (!(url.indexOf("http://") === 0 || url.indexOf("https://") === 0)) {
          targetUrl = "https://" + targetUrl;
        }
        const { hostname } = new URL(targetUrl);
        return hostname;
      } catch (e) {
        console.error(e);
        return null;
      }
    }
}
`
);
