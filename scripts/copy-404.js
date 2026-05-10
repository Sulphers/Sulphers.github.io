import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html is missing. Run this script after vite build.');
}

copyFileSync(indexPath, notFoundPath);
