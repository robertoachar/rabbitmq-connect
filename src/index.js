const winston = require('winston');

const broker = require('./broker');
const config = require('./config');

Object.keys(config).map((key) => winston.info(`${key}: ${config[key]}`));

broker.start().catch((err) => {
  winston.error(err.message);
});
