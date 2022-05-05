const winston = require('winston');
require('winston-daily-rotate-file');

const options = require('./options.js');

const transport = new winston.transports.DailyRotateFile(options);

const logger = new winston.createLogger({
  transports: [transport]
});

module.exports=logger;