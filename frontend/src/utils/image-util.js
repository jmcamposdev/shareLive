/**
 * Returns the URL of the image file with the given name
 * @param {String} name The name of the image file
 * @returns {String} The URL of the image
 */
export function getImageURL (relativePath) {
  return new URL(`../assets/img/${relativePath}`, import.meta.url).href
}
