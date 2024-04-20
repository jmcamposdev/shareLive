export function toCamelCase (str) {
  return str.replace(/\s(.)/g, function (match, group1) {
    return group1.toUpperCase()
  }).replace(/\s/g, '').replace(/^(.)/, function (match, group1) {
    return group1.toLowerCase()
  })
}
