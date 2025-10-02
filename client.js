const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["10.187.25.186:9092"],
});

module.exports = kafka;   // export instance directly
