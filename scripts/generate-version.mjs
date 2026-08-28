import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const version =
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.GIT_COMMIT_SHA ||
  `build-${Date.now()}`;

const publicDirectory = join(process.cwd(), 'public');
await mkdir(publicDirectory, { recursive: true });
await writeFile(
  join(publicDirectory, 'version.json'),
  `${JSON.stringify({ version, builtAt: new Date().toISOString() }, null, 2)}\n`,
  'utf8'
);

console.log(`Generated application version: ${version}`);
