const amqp = require('amqplib');
const winston = require('winston');

const config = require('./config');

module.exports.start = async () => {
  winston.info('Starting broker...');

  const connection = await amqp.connect(config.MESSAGE_QUEUE);
  winston.info('Connection opened!');

  await connection.createChannel();
  winston.info('Channel opened!');

  setTimeout(() => {
    connection.close();
    winston.info('Connection closed!');
  }, 1000);
};
