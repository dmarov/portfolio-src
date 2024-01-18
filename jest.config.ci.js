const appConfig = require("./jest.config");

module.exports = {
  ...appConfig,
  collectCoverage: true,
  coverageReporters: ["lcov", "text-summary"],
};
