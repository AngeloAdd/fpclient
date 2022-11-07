import { createWriteStream, readFileSync, createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';

const buildPackageJson = fileURLToPath(new URL('../build/package.json', import.meta.url));
const buildAppYaml = fileURLToPath(new URL('../build/app.yaml', import.meta.url));
const rewrite = fileURLToPath(new URL('./package.json.stub', import.meta.url));

createReadStream(rewrite).pipe(createWriteStream(buildPackageJson));
const ciao = readFileSync(buildAppYaml).toString();
const ciaoSplit = ciao.split('handlers:');
ciaoSplit[0] = readFileSync(fileURLToPath(new URL('../app.yaml', import.meta.url)));
createWriteStream(buildAppYaml).write(ciaoSplit.join('\nhandlers:'));
