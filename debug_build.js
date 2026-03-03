const { execSync } = require('child_process');
const fs = require('fs');
try {
    execSync('npm run build', { encoding: 'utf-8', stdio: 'pipe' });
    console.log("Build OK");
} catch (e) {
    fs.writeFileSync('build_error_utf8.txt', e.stdout + "\\n" + e.stderr, 'utf8');
}
