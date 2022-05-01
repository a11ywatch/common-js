import { codecs } from "../src/codecs";

describe("Convert string to cipher hex and back", () => {
  test("convert and deconvert", () => {
    const target = "https://a11ywatch.com";

    const c = codecs.cipher(target);

    expect(target).toEqual(codecs.decipher(c));
  });
});
