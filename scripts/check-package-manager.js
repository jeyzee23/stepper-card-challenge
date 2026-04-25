const fs = require('fs');

const forbiddenLockfiles = ['package-lock.json', 'pnpm-lock.yaml'];
const presentForbiddenLockfiles = forbiddenLockfiles.filter(lockfile =>
  fs.existsSync(lockfile),
);

if (presentForbiddenLockfiles.length > 0) {
  console.error(
    `Use yarn for this project. Remove: ${presentForbiddenLockfiles.join(
      ', ',
    )}`,
  );
  process.exit(1);
}

if (!fs.existsSync('yarn.lock')) {
  console.error('Missing yarn.lock. Run yarn install and commit the lockfile.');
  process.exit(1);
}

console.log('Package manager check passed.');
