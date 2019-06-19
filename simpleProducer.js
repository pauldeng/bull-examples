const Bull = require('bull');

const myFirstQueue = new Bull('my-first-queue');

async function produceJob() {
    const job = await myFirstQueue.add({
        foo: 'bar'
    });
    console.log("Added job: " + JSON.stringify(job));
    process.exit();
}

produceJob();
