/* eslint no-process-env: 0 */

require('dotenv').config();

const environment = ['NODE_ENV', 'MESSAGE_QUEUE'];

environment.forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

const config = {
  NODE_ENV: process.env.NODE_ENV,
  MESSAGE_QUEUE: process.env.MESSAGE_QUEUE
};

module.exports = config;
