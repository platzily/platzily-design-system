module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/tests.config.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@platzily-ui/styling': '<rootDir>/packages/styling',
    '@platzily-ui/styling/*': '<rootDir>/packages/styling/$1',
    '@platzily-ui/utils': '<rootDir>/packages/utils',
    '@platzily-ui/utils/*': '<rootDir>/packages/utils/$1',
    '@platzily-ui/icons': '<rootDir>/packages/icons',
    '@platzily-ui/icons/*': '<rootDir>/packages/icons/$1',
    '@platzily-ui/components': '<rootDir>/packages/components',
    '@platzily-ui/components/*': '<rootDir>/packages/components/$1',
  },
  modulePathIgnorePatterns: ['dist']
};
