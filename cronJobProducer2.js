var Queue = require("bull");
var cronDelay = new Queue("cronDelay");
cronDelay
  .add(
    {
      everysec: "every5sec"
    },
    {
      delay: 100,
      repeat: {
        cron: "*/5 * * * * *"
      }
    }
  )
  .catch(err => console.log(err));

cronDelay.process(5, (job, done) => {
  console.log("%j", job.data);
  //console.log(JSON.stringify(job))
  done();
});
