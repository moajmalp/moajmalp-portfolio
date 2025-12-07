import { exec } from 'child_process';
import fs from 'fs';

exec('npm run lint', (error, stdout, stderr) => {
    console.log('Lint finished with code ' + (error ? error.code : 0));
    fs.writeFileSync('lint_output_full.txt', stdout + '\n' + stderr);
});
