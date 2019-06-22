function logError (name, params) {
  const paramsString = []
  for (const key in params) {
    if (params.hasOwnProperty(key)) {           
      paramsString.push(`${key}: ${params[key]}`)
    }
}
  return new Error(`\nname: ${name}\n${paramsString.join('\n')}`)
}

module.exports = {
  createError
}
