import { sourceBuild } from "@app/source-build";

describe("Source Builder", () => {
  test("runs and returns website domain props", () => {
    const url = "www.drake.com";
    const httpUrl = `http://${url}`;
    const data = sourceBuild(httpUrl);

    expect(data).toEqual({
      cdnJsPath: `${url}/www-drake-com-ada-fix.js`,
      cdnMinJsPath: `${url}/www-drake-com-ada-fix.min.js`,
      cdnSourceStripped: "www-drake-com-ada-fix",
      domain: url,
      pageUrl: httpUrl,
      pathname: "/",
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
      pathname: "",
    });
  });
});
