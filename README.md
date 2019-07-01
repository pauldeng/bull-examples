<h1 align="center">Welcome to Node.js Bull Examples</h1>
<p>
  <a href="https://github.com/pauldeng/bull-examples/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Some examples of Bull library

## Setup

```sh
# Ubuntu 18.04
# Install nvm
# Install Redis
sudo apt install redis
```

## Install

```sh
git clone https://github.com/pauldeng/bull-examples.git
cd bull-examples
npm install
```

## Try
```sh
# generate 1 simple job
node simpleProducer.js

# in other terminal window
node simpleConsumer.js
# you should see {foo:'bar'}

# generate more jobs
node simpleProducer.js
node simpleProducer.js
# you will see they are consumed in simpleConsumer.js terminal

# add a repeated job, 1 message per second
node cronJobProducer1.js

# in other terminal window
node consumer.js
# you will see 1 message every second

# you can list all repeated jobs by
node listJobs.js

# you can delete individual repeated job by
node removeJob.js

```


## Author

👤 **Paul Deng**

* Twitter: [@pauldeng](https://twitter.com/pauldeng)
* Github: [@pauldeng](https://github.com/pauldeng)

## 📝 License

Copyright © 2019 [Paul Deng](https://github.com/pauldeng).<br />
This project is [MIT](https://github.com/pauldeng/bull-examples/blob/master/LICENSE) licensed.
