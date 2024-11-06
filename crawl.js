const normalizeURL = (url) => {
  const urlObj = new URL(url);
  const hostAndPath = `${urlObj.host}${urlObj.pathname.replace(/\/$/, '')}`;
  return hostAndPath;
}

console.log(normalizeURL('https://blog.boot.dev/path'))
export { normalizeURL }