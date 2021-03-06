const Queue = require("bull");
const cronDelay = new Queue("cronDelay");

async function listAllRepeatJobs() {
  const jobs = await cronDelay.getRepeatableJobs();
  console.log("Jobs in the queue: " + jobs.length);
  console.log(JSON.stringify(jobs));
}

listAllRepeatJobs().then(() => process.exit());
