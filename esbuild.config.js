// esbuild.config.js (CommonJS syntax)
const { build } = require('esbuild');
const path = require('path');

build({
  entryPoints: ['backend/server.js'], 
  bundle: true,
  platform: 'node', 
  target: 'node16', 
  outfile: 'dist/backend/server.js', 
  external: ['express'], 
  sourcemap: true, 
}).then(() => {
  console.log('Server build complete!');
}).catch((e) => {
  console.error('Server build failed:', e);
});
