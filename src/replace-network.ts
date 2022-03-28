export const replaceDockerNetwork = (
  url: string,
  proxUrls: string[] = [
    "mav",
    "localhost",
    "pagemind",
    "crawler",
    "cdn-server",
    "api",
  ],
  replaceNetwork: boolean = process.env.NODE_ENV === "production" &&
    !!process.env.DOCKER_ENV
) => {
  const index = replaceNetwork
    ? proxUrls.findIndex((element) => url.includes(element))
    : -1;

  return index !== -1 ? url.replace(proxUrls[index], "127.0.0.1") : url;
};
