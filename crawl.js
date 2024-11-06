const normalizeURL = (url) => {
  const myUrl = new URL(url);
  const hostAndPath = `${myUrl.host}${myUrl.pathname.replace(/\/$/, '')}`;
  return hostAndPath;
}

console.log(normalizeURL('https://blog.boot.dev/path'))
export { normalizeURL }