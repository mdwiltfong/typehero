import { promises as fs } from 'node:fs';

const test = await fs.readdir('.', { withFileTypes: true });
console.log(test);
