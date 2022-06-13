FROM archlinux
WORKDIR /app
RUN pacman --noconfirm -Sy nodejs npm &&\
    npm install -g yarn @angular/cli &&\
    yarn
EXPOSE 4200
CMD yarn && ng serve --configuration=en

