/**
 * @type {import('jest').Config}
 */
const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageProvider: "v8",
    forceExit: true,
    // moduleFileExtensions: [
    //   "js",
    //   "mjs",
    //   "cjs",
    //   "jsx",
    //   "ts",
    //   "tsx",
    //   "json",
    //   "node"
    // ],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: ["\\\\node_modules\\\\"],

    transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
    verbose: true
};

module.exports = config;
