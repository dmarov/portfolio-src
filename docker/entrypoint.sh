#!/bin/sh

npm install

ENV_DIR=/app/src/environments

if [ ! -f $ENV_DIR/environment.ts ]; then
  cp $ENV_DIR/environment.example.ts $ENV_DIR/environment.ts
fi

ng serve --host=0.0.0.0 --port=4200 --configuration=en --disable-host-check &
ng serve --host=0.0.0.0 --port=4201 --configuration=ru --disable-host-check &

# Wait for every process to exit
wait < <(jobs -p)
