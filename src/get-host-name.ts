import { URL } from "url";

export function getHostName(url: string) {
  try {
    const { hostname } = new URL(url);

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
