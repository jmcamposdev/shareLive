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

export function snakeToNormalCase (str) {
  return str.replace(/_/g, ' ')
}

export function upperCaseToNormalCase (str) {
  const allLowerCase = str.toLowerCase()
  return allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1)
}

export function removeDiacritics (text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
