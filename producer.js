const kafka = require('./client');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function init() {
    const producer = kafka.producer();
    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");
    rl.setPrompt(">/");
    rl.prompt();

    rl.on('line', async (input) => {
        const [riderName, location] = input.split(" ");
        await producer.send({
            topic: "rider-updates",
            messages: [
                {
                    partition: location.toLowerCase() === "north" ? 1 : 0, // assuming 3 partitions
                    key: "location-update",
                    value: JSON.stringify({ name: riderName, location }),
                },
            ],
        });
    }).on('close', async () => {
        await producer.disconnect();
    });

}

init();