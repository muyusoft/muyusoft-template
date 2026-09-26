module.exports = {
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{ts,tsx}",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    "src/shared/utils/**/*.{ts,tsx}",
    "src/shared/hooks/**/*.{ts,tsx}",
    "src/shared/services/**/*.{ts,tsx}",
    "src/shared/store/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}",
    "!src/app/**",
    "!src/shared/components/**",
    "!src/shared/layouts/**",
    "!src/shared/icons/**",
    "!src/shared/playground/**",
    "!src/design/**",
    "!src/constants/**",
  ],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
};
