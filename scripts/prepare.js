// Kopiuje three.min.js (r128) z node_modules obok index.html, żeby gra działała bez internetu.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');
const dst = path.join(__dirname, '..', 'three.min.js');
if (fs.existsSync(src)) { fs.copyFileSync(src, dst); console.log('three.min.js skopiowany'); }
else console.warn('Brak node_modules/three – gra użyje wersji z internetu (CDN).');
