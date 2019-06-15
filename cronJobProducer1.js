var Queue = require("bull");
var cronDelay = new Queue("cronDelay");
cronDelay
  .add(
    {
      everysec: "every1sec"
    },
    {
      delay: 100,
      repeat: {
        cron: "*/1 * * * * *"
      }
    }
  )
  .catch(err => console.log(err));

cronDelay.process(5, (job, done) => {
  console.log("%j", job.data);
  done();
});
