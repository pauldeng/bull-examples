const Queue = require("bull");
const cronDelay = new Queue("cronDelay");

async function listAllRepeatJobs() {
  const numJobs = await cronDelay.count();
  console.log("Jobs in the queue: " + numJobs);

  const jobs = await cronDelay.getRepeatableJobs();
  console.log(JSON.stringify(jobs));
}

listAllRepeatJobs().then(() => process.exit());
