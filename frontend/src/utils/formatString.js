export function toCamelCase (str) {
  return str.replace(/\s(.)/g, function (match, group1) {
    return group1.toUpperCase()
  }).replace(/\s/g, '').replace(/^(.)/, function (match, group1) {
    return group1.toLowerCase()
  })
}

export function toNormalCase (str) {
  return str.replace(/([A-Z])/g, ' $1')
    .replace(/^./,
      function (match) {
        return match.toUpperCase()
      }
    )
}

export function removeDiacritics (text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
