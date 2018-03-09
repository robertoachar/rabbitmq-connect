const winston = require('winston');

const broker = require('./broker');
const config = require('./config');

for (const key in config) {
  winston.info(`${key}: ${config[key]}`);
}

broker.start().catch((err) => {
  winston.error(err.message);
});
