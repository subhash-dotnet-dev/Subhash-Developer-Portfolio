import { defineConfig } from 'vite';
import { cpSync, mkdirSync, existsSync } from 'fs';

// Root-level Vite config that serves and builds the project/ subdirectory
function copyStaticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    apply: 'build',
    closeBundle() {
      const src = 'project';
      const dest = 'project/dist';

      cpSync(`${src}/components`, `${dest}/components`, { recursive: true });

      if (!existsSync(`${dest}/assets`)) mkdirSync(`${dest}/assets`, { recursive: true });
      cpSync(`${src}/assets/images`, `${dest}/assets/images`, { recursive: true });
      cpSync(`${src}/assets/resume`, `${dest}/assets/resume`, { recursive: true });

      if (existsSync(`${src}/pages`)) {
        cpSync(`${src}/pages`, `${dest}/pages`, { recursive: true });
      }

      cpSync(`${src}/data`, `${dest}/data`, { recursive: true });
      cpSync(`${src}/css`, `${dest}/css`, { recursive: true });
      cpSync(`${src}/js`, `${dest}/js`, { recursive: true });
      cpSync(`${src}/social link subhash.txt`, `${dest}/social link subhash.txt`);
    },
  };
}

export default defineConfig({
  root: 'project',
  base: './',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  plugins: [copyStaticAssetsPlugin()],
});
