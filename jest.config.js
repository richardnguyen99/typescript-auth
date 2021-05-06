module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/__test__/*.(ts|js)"
  ],
  setupFiles: ["<rootDir>/scripts/setEnvVars.js"],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
