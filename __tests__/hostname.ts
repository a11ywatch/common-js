import { getHostAsString } from "../src/get-host-name";

describe("Find source name [script]", () => {
  test("gets script to js", () => {
    expect(getHostAsString).toBeTruthy();
  });
});
