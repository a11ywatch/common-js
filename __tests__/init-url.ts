import { initUrl } from "../src/init-url";

describe("Clean url to use", () => {
  test("init url", () => {
    const baseurl = "www.drake.com";
    const url = initUrl(baseurl);

    expect(url).toEqual(`https://${baseurl}`);
  });
});
