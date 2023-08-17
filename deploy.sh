npm run lint \
&& npm run lint:styles \
&& npm run test \
&& npm run build:prod \
&& mkdir deploy \
&& cd deploy \
&& git clone git@github.com:dmarov/dmarov.github.io.git ./ \
&& rm -rdf ./** \
&& cp -r ../dist/portfolio/** ./ \
&& git add -A \
&& git commit -m"deploy $(date '+%Y-%m-%d %H:%M:%S')" \
&& git push \
&& cd ../ \
&& rm -rdf ./deploy
