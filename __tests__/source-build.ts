import { sourceBuild } from "@app/source-build";

describe("Source Builder", () => {
  test("runs and returns website domain props", () => {
    const url = "www.drake.com";
    const httpUrl = `http://${url}`;
    const data = sourceBuild(httpUrl);
    const domain = url.replace("www.", "");

    expect(data).toEqual({
      cdnJsPath: `${domain}/www-drake-com-ada-fix.js`,
      cdnMinJsPath: `${domain}/www-drake-com-ada-fix.min.js`,
      cdnSourceStripped: "www-drake-com-ada-fix",
      domain,
      pageUrl: httpUrl,
      url: httpUrl
    });
  });

  test("runs and returns empty data", () => {
    const data = sourceBuild("");

    expect(data).toEqual({
      cdnJsPath: "",
      cdnMinJsPath: "",
      cdnSourceStripped: "",
      domain: "",
      pageUrl: "",
      url: ""
    });
  });
});
