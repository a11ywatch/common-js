import { replaceDockerNetwork } from "@app/replace-network";

describe("Network Replacer", () => {
  test("runs and returns normal network", () => {
    const url = "http://www.drake.com";
    const data = replaceDockerNetwork(url);

    expect(data).toEqual(url);
  });

  test("runs and returns docker network", () => {
    const url = "http://mav:8050";
    const data = replaceDockerNetwork(url, undefined, true);

    expect(data).toEqual(url.replace("mav", "127.0.0.1"));
  });
});
