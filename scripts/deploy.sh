#!/bin/sh

$DEPLOY_DIR=../../dmarov.github.io

npm run prettier \
&& npm run lint \
&& npm run lint:styles \
&& npm run test \
&& npm run build:prod \
&& cd $DEPLOY_DIR \
&& rm -rdf ./** \
&& cp -r ../protfolio-src/dist/portfolio/** ./ \
&& git add -A \
&& git commit -m"deploy $(date '+%Y-%m-%d %H:%M:%S')" \
&& git push \
&& cd ../protfolio-src
