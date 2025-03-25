const { pathsToModuleNameMapper } = require('ts-jest');

const paths = {
}
module.exports = {
    displayName: 'WebComponents Tests',
    testRunner: 'jest-jasmine2',
    preset: '@stencil/core/testing',
    roots: [
        '<rootDir>/src/components', //
  
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    transform: {
        '^.+\\.(ts|tsx|jsx|css|mjs)$': '@stencil/core/testing/jest-preprocessor.js',
    },
    coveragePathIgnorePatterns: [ ],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
    },
    cacheDirectory: './.jest-cache',
    coverageThreshold: {
        global: { 
          lines: 90,
          statements: 90
        }
    }
};
