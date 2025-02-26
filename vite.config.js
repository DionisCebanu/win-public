import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const pagesDir = path.resolve(__dirname, 'pages');

// Function to dynamically get all HTML files in pages/
const getHtmlEntries = (dir) => {
  const entries = {};

  const traverse = (currentDir) => {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const fullPath = path.join(currentDir, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        traverse(fullPath); // Recursively go through subdirectories
      } else if (file.endsWith('.html')) {
        const relativePath = path.relative(pagesDir, fullPath);
        const name = relativePath.replace(/\.html$/, '').replace(/\\/g, '/'); // Normalize path

        entries[name] = fullPath;
      }
    });
  };

  traverse(dir);
  return entries;
};

export default defineConfig({
  root: pagesDir, // Set 'pages' as the root for Vite
  base: './', // Use relative paths for deployment
  publicDir: path.resolve(__dirname, 'public'), // Public static files
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output directory for Vite build
    emptyOutDir: true, // Clear dist before building
    rollupOptions: {
      input: getHtmlEntries(pagesDir), // Dynamically include all HTML files
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'assets'),
      '@components': path.resolve(__dirname, 'components'),
      '@css': path.resolve(__dirname, 'css'),
      '@js': path.resolve(__dirname, 'js'),
      '@fonts': path.resolve(__dirname, 'fonts'),
      '@sass': path.resolve(__dirname, 'sass'),
    },
  },
});
