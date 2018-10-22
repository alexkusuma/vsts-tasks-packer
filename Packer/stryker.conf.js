module.exports = function(config) {
  config.set({
    testRunner: "mocha",
    mutator: "typescript",
    transpilers: ["typescript"],
    reporters: ["html", "clear-text", "progress", "baseline"],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"]
  });
};
