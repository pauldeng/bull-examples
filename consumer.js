const Queue = require("bull");
const cronDelay = new Queue("cronDelay");

cronDelay.process(5, (job, done) => {
  console.log("%j", job.data);
  //console.log(JSON.stringify(job));
  done();
});
