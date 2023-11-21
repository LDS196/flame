export function getIdFromUrl(url: string) {
  return url.slice(0, -1).split("/").pop();
}
