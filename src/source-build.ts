/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/
import { initUrl } from "./init-url"
import { getHostName } from "./get-host-name"
import { getPageUrl } from "./get-page-url"
import { stringFormater } from "./string-formater"

interface Source {
  url: string
  domain: string | null
  pageUrl: string
  cdnSourceStripped: string
  cdnJsPath: string
  cdnMinJsPath: string
}

export const sourceBuild = (
  urlMap: string,
  userId?: string | number
): Source => {
  const url = initUrl(urlMap || "")
  const domain = getHostName(url)
  const pageUrl = getPageUrl(url)
  const cdnSourceStripped = stringFormater.formatCdn(pageUrl)
  const basePath =
    domain && cdnSourceStripped
      ? `${domain}/${encodeURIComponent(cdnSourceStripped)}${
          typeof userId !== "undefined" ? `-${userId}` : ""
        }`
      : null
  const cdnJsPath = basePath ? `${basePath}.js` : ""
  const cdnMinJsPath = basePath ? `${basePath}.min.js` : ""

  return {
    url,
    domain,
    pageUrl,
    cdnSourceStripped,
    cdnJsPath,
    cdnMinJsPath
  }
}
