import { URL } from "url";

const validTransport = (str) => {
  if (str.indexOf("http://") === 0 || str.indexOf("https://") === 0) {
    return true;
  }
  return false;
};

export function getHostName(url: string) {
  try {
    let targetUrl = url;

    if (!url) {
      return "";
    }

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
    var re = new RegExp("//(www[0-9]?.)(.[^/:]+)", "i");
    try {
      return (url === null || url === void 0 ? void 0 : url.match(re)[2]) || null;    
    } catch(e) {
      console.log(e);
    }
}
`
);
