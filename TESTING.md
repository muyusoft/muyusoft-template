# Testing Strategy

## Current Status: Jest + Utilities Only

```
✅ 4 Test Suites, 65 Tests Passing
📊 39.7% Coverage (Utils: 88.52%)
⏱️ ~1.5 seconds
```

---

## What Jest Tests (✅ Working)

### Pure Utility Functions

- **currency.utils** - 78.94% coverage
- **date.utils** - 85.71% coverage
- **number.utils** - 100% coverage ✨
- **validation.utils** - 100% coverage ✨

**Why it works:** No external dependencies. Only JavaScript logic.

```typescript
// ✅ Jest can test this
const round = (value: number, decimals: number = 2): number => {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
```

---

## What Jest Cannot Test (❌ Limitations)

### 1. React Native Imports

```typescript
// ❌ Fails in Jest
import { StyleSheet, View } from "react-native";
// Jest runs in Node.js, not a React Native environment
```

### 2. Expo Modules (ESM)

```typescript
// ❌ Fails in Jest
import * as SecureStore from "expo-secure-store";
// Zustand stores depend on AsyncStorage (ESM)
```

### 3. HTTP Client (ESM)

```typescript
// ❌ Fails in Jest
import httpClient from "@/config/http-client";
// Services and API calls require proper ESM mocking
```

### 4. React Components & Hooks

```typescript
// ❌ Requires React Testing Library + Vitest
export const useIcon = ({ size = 24 }: IconProps) => {
  return { width: size, height: size };
};
```

---

## Why This Limitation?

Jest Configuration:

- `testEnvironment: "node"` → Node.js, not browser/mobile
- CommonJS runtime → Cannot load ESM modules correctly
- No React rendering environment

The ecosystem moved to ESM, but Jest's Node.js environment still struggles.

---

## Solution: Use Vitest

Vitest is a modern Jest alternative with **native ESM support**.

### Setup (5 minutes)

```bash
npm install -D vitest happy-dom
```

Update `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage"
  }
}
```

Create `vitest.config.ts`:

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
  },
});
```

### Benefits

✅ Native ESM support  
✅ Works with React Native imports  
✅ Faster test execution  
✅ Better TypeScript support  
✅ Drop-in Jest replacement

---

## Coverage Roadmap

| Module     | Current   | With Vitest |
| ---------- | --------- | ----------- |
| Utils      | 88.52%    | ✅ Same     |
| Stores     | 0%        | ✅ 80%+     |
| Services   | 0%        | ✅ 80%+     |
| Hooks      | 0%        | ✅ 70%+     |
| Components | 0%        | ✅ 60%+     |
| **Total**  | **39.7%** | **→ 80%+**  |

---

## Current Test Suite

```bash
npm test              # Run all tests (65 passing)
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

## Test Files

```
src/shared/utils/__tests__/
├── currency.utils.test.ts      (7 tests)
├── date.utils.test.ts          (10 tests)
├── number.utils.test.ts        (21 tests)  → 100%
└── validation.utils.test.ts    (34 tests)  → 100%
```

---

## Next Steps

### Option 1: Stick with Jest (Simplest)

- Keep testing utilities
- Write integration tests manually
- Use Expo Go for manual testing

### Option 2: Migrate to Vitest (Recommended)

- Get full test coverage
- Same test syntax (nearly identical to Jest)
- Better ESM support

### Option 3: Hybrid Approach

- Jest for utilities (current setup)
- Vitest for components/stores/services
- Run both test suites in CI/CD

---

## Resources

- [Vitest Docs](https://vitest.dev)
- [Jest to Vitest Migration](https://vitest.dev/guide/migration)
- [React Native Testing](https://reactnative.dev/docs/testing-overview)

---

**Summary:** Jest excels at testing pure functions. For React Native projects, Vitest is the modern choice.
