const fs = require('fs');

fs.copyFileSync('src/base-index.html', 'dist/portfolio/index.html');
fs.copyFileSync('src/404.html', 'dist/portfolio/404.html');
fs.copyFileSync('src/favicon.ico', 'dist/portfolio/favicon.ico');
