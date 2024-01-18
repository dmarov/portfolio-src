# Portfolio

![Portfolio](https://github.com/dmarov/portfolio-src/actions/workflows/ci.yml/badge.svg?branch=master)

## Development with Docker

1. [optional] Create `.env` file and set default variables:

```
SERVER_PORT_EN=4200 # (4200 by default) angular server port for english version
SERVER_PORT_RU=4201 # (4201 by default) angular server port for russian version
HOST_USER_ID=1000 # (1000 by default) host user id to fix file permissions issue
HOST_GROUP_ID=1000 # (1000 by default) host group id to fix file permissions issue
```

2. `docker compose up [--build]` - to run development container [and rebuild]. Press `Ctrl+C` to stop container.

3. `docker compose exec portfolio zsh` - to enter container shell (to install packages and so on)

```
ng generate component {some component}
ng test --watch
npm install {some package}
...
```

4. `docker compose down [--volumes]` - to stop detached container [and clear volumes]

## Unit testing

1. Use `ng test` to run unit tests once

2. Use `ng test --watch` to run unit tests in watch mode.

3. Use _Behavior Driven Development_ principles for development process.
