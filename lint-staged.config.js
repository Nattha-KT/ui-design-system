module.exports = {
  // Check TypeScript files, excluding .next directory
  '**/!(*.next)/**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint and Format TypeScript and JavaScript, excluding .next directory
  '**/!(*.next)/**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON, excluding .next directory
  '**/!(*.next)/**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
};