module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: "node",
  testMatch: [
    '**/__tests__/**/*.+(ts|js)',
    '**/?(*.)+(spec|test).+(ts|js)',
  ],
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
  },
  moduleNameMapper: {
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@helpers/(.*)": "<rootDir>/src/helpers/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
