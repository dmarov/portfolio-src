#!/bin/sh

npm install

ng serve --host=0.0.0.0 --port=4200 --configuration=en --disable-host-check &
ng serve --host=0.0.0.0 --port=4201 --configuration=ru --disable-host-check &

# Wait for any process to exit
wait -n
# Exit with status of process that exited first
exit $?


