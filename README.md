<h1 align="center">Welcome to Node.js Bull Examples</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/pauldeng/bull-examples#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/pauldeng/bull-examples/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
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

## Run
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
```


## Author

👤 **Paul Deng**

* Twitter: [@pauldeng](https://twitter.com/pauldeng)
* Github: [@pauldeng](https://github.com/pauldeng)

## 🤝 Contributing

Contributions, issues and feature requests are welcome !<br />Feel free to check [issues page](https://github.com/pauldeng/bull-examples/issues).

## Show your support

Give a ⭐️ if this project helped you !

## 📝 License

Copyright © 2019 [Paul Deng](https://github.com/pauldeng).<br />
This project is [MIT](https://github.com/pauldeng/bull-examples/blob/master/LICENSE) licensed.
