/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // ✅ transform .tsx with ts-jest
  },
  transformIgnorePatterns: [
    "node_modules/(?!(.*\\.mjs$))", // keep default behavior
  ],
  //   snapshotSerializers: ["@emotion/jest/serializer"],
};
