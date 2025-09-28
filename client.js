const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["192.168.1.7:9092"],
});

module.exports = kafka;   // export instance directly
