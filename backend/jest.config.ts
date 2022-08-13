export default {
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  preset: "ts-jest",

  testMatch: ["**/**/*.test.ts"],
  verbose: true,
};
