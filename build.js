// Build step: compiles src/ into a fast, ready-to-serve site in dist/.
// Netlify runs this automatically. To run it yourself: npm install, then npm run build.
const B = require('@babel/standalone');
const fs = require('fs');
const path = require('path');

const SRC = 'src', DIST = 'dist';
fs.rmSync(DIST, { recursive: true, force: true });

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    const s = path.join(from, name), d = path.join(to, name);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

// 1. copy everything except the JSX source (which gets compiled instead)
copyDir(SRC, DIST);
fs.rmSync(path.join(DIST, 'js', 'app.jsx'), { force: true });

// 2. compile app.jsx -> dist/js/app.js
const jsx = fs.readFileSync(path.join(SRC, 'js', 'app.jsx'), 'utf8');
const out = B.transform(jsx, {
  presets: [['env', { targets: 'defaults' }], 'react'],
  compact: true, comments: false
}).code;
fs.writeFileSync(path.join(DIST, 'js', 'app.js'), out);

console.log('Built dist/ successfully.');
