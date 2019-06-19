const Bull = require('bull');

const myFirstQueue = new Bull('my-first-queue');

myFirstQueue.process(async (job, done) => {
    console.log(job.data);
    done();
});