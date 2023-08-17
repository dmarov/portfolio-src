# Portfolio

## Development with Docker

1. [optional] Create `.env` file and set default variables:

```
SERVER_PORT=4200 # (4200 by default) angular server port
HOST_USER_ID=1000 # (1000 by default) host user id to fix file permissions issue
HOST_GROUP_ID=1000 # (1000 by default) host group id to fix file permissions issue
APP_LANG=en ('en' by default) language of application to serve
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

3. Use *Behavior Driven Development* principles for development process.

## TODO:

- add "This Website was made using..."
- add "Voice Robots" project
- change home image
- update tech stack and rework home page
- update "About me"
- improve menu for desktop
- improve design
- google analytics
- add jest unit tests
- use component local styles ViewEncapsulation.None
- add cypress tests
- add deployment pipeline
