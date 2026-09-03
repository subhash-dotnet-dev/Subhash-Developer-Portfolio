import { defineConfig } from 'vite';
import { cpSync, mkdirSync, existsSync } from 'fs';

// Copy component HTML files and static assets to dist
// (Vite only bundles assets referenced via import — our data files use string paths)
function copyStaticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    apply: 'build',
    closeBundle() {
      // Copy components
      cpSync('components', 'dist/components', { recursive: true });

      // Copy all static assets (images, resume, etc.)
      if (!existsSync('dist/assets')) mkdirSync('dist/assets', { recursive: true });
      cpSync('assets/images', 'dist/assets/images', { recursive: true });
      cpSync('assets/resume', 'dist/assets/resume', { recursive: true });

      // Copy pages
      if (existsSync('pages')) {
        cpSync('pages', 'dist/pages', { recursive: true });
      }

      // Copy data files (needed at runtime for sub-pages)
      cpSync('data', 'dist/data', { recursive: true });

      // Copy CSS and JS (sub-pages reference these via ../css/ and ../js/)
      cpSync('css', 'dist/css', { recursive: true });
      cpSync('js', 'dist/js', { recursive: true });

      // Copy social link file
      cpSync('social link subhash.txt', 'dist/social link subhash.txt');
    },
  };
}

export default defineConfig({
  root: '.',
  base: './',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [copyStaticAssetsPlugin()],
});
