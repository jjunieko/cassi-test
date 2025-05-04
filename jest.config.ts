
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/redux/(.*)$': '<rootDir>/src/redux/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }]
  }
};

module.exports = createJestConfig(config);

