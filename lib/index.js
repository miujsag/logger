const {createLogger, format, transports} = require('winston')
const { combine, timestamp, printf } = format
require('winston-daily-rotate-file')

const myFormat = printf(({message, timestamp}) => `${timestamp}\n${message}\n`)

const logger = createLogger({
  transports: [
    new transports.DailyRotateFile({
      name: 'info-file',
      datePattern: 'YYYY-MM-DD',
      prepend: true,
      filename: './logs/%DATE%-info.log',
      maxFiles: '7d',
      level: 'info',
      format: combine(
        timestamp(),
        myFormat
      )
    }),
    new transports.DailyRotateFile({
      name: 'error-file',
      datePattern: 'YYYY-MM-DD',
      prepend: true,
      filename: './logs/%DATE%-error.log',
      maxFiles: '7d',
      level: 'error',
      format: combine(
        timestamp(),
        myFormat
      )
    }),
    new transports.Console({
      colorize: true,
      format: combine(
        timestamp(),
        myFormat
      )
    })
  ]
})

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
}

const timestampFormat = 'YYYY-HH-DDThh:mm:ss'

function createLogMessage (object) {
  return Object
  .entries(object)           
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n')
}

function logError (error) {
  logger.error(error.message)
}

function logInfo (message) {
  logger.info(message)
}

module.exports = {
  createLogMessage,
  logError,
  logInfo,
  stream: logger.stream
}
