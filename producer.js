const kafka = require('./client');



async function init() {
    const producer = kafka.producer();
    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");
    const riderName = "banti", location = "south"

    await producer.send({
        topic: "rider-updates",
        messages: [
            {
                partition: 0,
                key: "location-update",
                value: JSON.stringify({ name: riderName, location }),
            },
        ],
    });

    await producer.disconnect();

}

init();