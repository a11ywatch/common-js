// convert text to chars
const textToChars = (text: any) =>
  text.split("").map((c: any) => c.charCodeAt(0));

// convert to byte hex
const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);

// cipher string to code
export const cipher = (text: any) =>
  text.split("").map(textToChars).map(byteHex).join("");

// uncipher string from code to text
export const decipher = (encoded: any) =>
  encoded
    .match(/.{1,2}/g)
    .map((hex: any) => parseInt(hex, 16))
    .map((charCode: any) => String.fromCharCode(charCode))
    .join("");

// handle ciphering strings for usage in browsers for handling urls via next.js ssr.
export const codecs = {
  cipher,
  decipher,
};
