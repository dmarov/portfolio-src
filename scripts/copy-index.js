const fs = require('fs');

fs.copyFileSync('dist/portfolio/en/index.html', 'dist/portfolio/index.html');
fs.copyFileSync('dist/portfolio/en/404.html', 'dist/portfolio/404.html');
