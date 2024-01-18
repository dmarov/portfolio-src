const appConfig = require("./jest.config");

module.exports = {
  ...appConfig,
  collectCoverage: true,
  coverageReporters: ["json", "text-summary"],
};
