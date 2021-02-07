/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

export function getHostName(url: string) {
  const hostName = String(url).match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  return hostName && hostName.length >= 2 ? hostName[2] : "";
}

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
