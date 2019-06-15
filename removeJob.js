const Queue = require("bull");
const cronDelay = new Queue("cronDelay");

async function removeRepeatJobs() {
  const jobs = await cronDelay.getRepeatableJobs();
  if (jobs.len > 0) {
    console.log("Deleting first job");
    const result = await cronDelay.removeRepeatableByKey(jobs[0].key);
    console.log(result);
  } else {
    console.log("No job found in the quue");
  }
}

removeRepeatJobs().then(() => process.exit());
