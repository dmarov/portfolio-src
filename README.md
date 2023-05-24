# Portfolio

## Development with Docker

1. [optional] Create `.env` file and set default variables:

```
SERVER_PORT=4200 # (4200 by default) angular server port
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

## TODO:

- fix language switch
- update "About me"
- change home image
- improve menu for desktop
- migrate from ngrx to services
- add "Voice Robots" project
- improve design
- google analytics
- update docker config
- add jest unit testing
- add cypress tests
- add deployment pipeline
