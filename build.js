const mri = require('mri');
const { build } = require('esbuild');

const pkg = require('./package.json');

const prog = mri(process.argv.slice(2), {
  boolean: ['watch', 'minify'],
});

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  format: 'esm',
  minify: prog.minify,
  watch: prog.watch,
  external: [...Object.keys(pkg.devDependencies), ...Object.keys(pkg.dependencies || {})],
});
