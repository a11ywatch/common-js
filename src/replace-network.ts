/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

export const replaceDockerNetwork = (
  url: string,
  proxUrls: string[] = ["mav", "localhost", "angelica", "cdn-server", "api"],
  replaceNetwork: boolean = process.env.NODE_ENV === "production" &&
    !!process.env.DOCKER_ENV
) => {
  const index = replaceNetwork
    ? proxUrls.findIndex(element => url.includes(element))
    : -1;

  return index !== -1 ? url.replace(proxUrls[index], "127.0.0.1") : url;
};
