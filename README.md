# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

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
- add "Voice Robots" project
- improve design
- google analytics
- update docker config
- add jest unit testing
- add cypress tests
