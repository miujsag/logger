function concatParams (params) {
  const paramsString = []

  for (const key in params) {
    if (params.hasOwnProperty(key)) {           
      paramsString.push(`${key}: ${params[key]}`)
    }
  }

  return paramsString
}

function logError (name, params) {
  const paramsString = concatParams(params)

  return new Error(`\nname: ${name}\n${paramsString.join('\n')}`)
}

function logInfo (name, params) {
  const paramsString = concatParams(params)

  console.log(`\nname: ${name}\n${paramsString.join('\n')}`)
}

module.exports = {
  logError,
  logInfo
}
