# syntax=docker/dockerfile:1
FROM node:18-alpine AS image-build

# zsh used for operating inside docker container
# git used for running unit tests
RUN apk add --update zsh git

ENV SERVER_PORT=4200
ARG HOST_USER_ID=1000
ARG HOST_GROUP_ID=1000
ARG USER_NAME=user

RUN npm install -g @angular/cli@16

WORKDIR /app

# create user if not exist
RUN addgroup -S ${HOST_GROUP_ID} &&\
 adduser\
 --disabled-password\
 --gecos ""\
 --ingroup "${HOST_GROUP_ID}"\
 --uid "${HOST_USER_ID}"\
 "${USER_NAME}" || true

# act as non-root user inside container (1000:1000 by default)
USER ${HOST_USER_ID}:${HOST_GROUP_ID}

# create empty config in order to avoid initial prompt
RUN touch ~/.zshrc
