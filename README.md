# React Native Base Template

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue)](https://www.typescriptlang.org/)
[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2057-black)](https://docs.expo.dev/versions/v57.0.0/)
[![React Native](https://img.shields.io/badge/React%20Native-0.86.3-61dafb)](https://reactnative.dev/)
[![Test Coverage](https://img.shields.io/badge/Coverage-81.3%25-brightgreen)](https://vitest.dev/)
[![Tested with Vitest](https://img.shields.io/badge/Tested%20with-Vitest-6e9f18)](https://vitest.dev/)

A production-ready React Native + Expo SDK 57 template with strict TypeScript, comprehensive testing, state management, internationalization, and professional infrastructure.

[Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [Testing](#-testing)

</div>

---

## 🚀 Features

### Core Technology Stack

- **React Native 0.86.3** - Latest mobile framework with Expo SDK 57
- **TypeScript 6.0 (Strict)** - Full type safety across codebase
- **Expo Router** - File-based routing for seamless navigation
- **ESLint** - Code quality enforcement & style consistency

### State Management & Persistence

- **Zustand** - Lightweight, high-performance state management (3 stores)
- **AsyncStorage** - Automatic state persistence middleware
- **Auto-hydration** - Seamless state restoration on app startup
- **Stores Included** - Auth, theme, permissions

### Internationalization (i18n)

- **i18next** - Professional translation framework
- **2 Languages** - English (EN) & Spanish (ES) built-in
- **Localized Formatting** - Currency, dates, numbers per locale
- **Dynamic Language Switching** - No app restart required

### Design System

- **66 Colors** - 6 color palettes × 11 tones + semantic tokens
- **Light/Dark Mode** - Full theme support with auto-detection
- **8 Typography Sizes** - Consistent type scale
- **Tailwind v4** - Utility-first styling
- **Centralized Tokens** - Single source of design truth

### HTTP & Error Handling

- **Axios HTTP Client** - Robust API communication with interceptors
- **Request/Response Logging** - Centralized middleware for debugging
- **Error Boundary** - Graceful error recovery with fallback UI
- **Centralized Logging** - 4-level logging (debug, info, warn, error)
- **Sentry Ready** - Production error tracking integration

### UI Components & Layouts

- **4 Reusable Layouts** - App, Auth, Public, Modal
- **49 SVG Icons** - High-quality vector graphics
- **Icon Registry** - Single source for icon management
- **Component Library** - ErrorBoundary + extensible patterns

### Testing Infrastructure

- **Vitest** - Native ESM support, fast & reliable
- **116 Tests** - Comprehensive unit & integration tests
- **81.3% Coverage** - Excellent code coverage metrics
- **Test Utilities** - Mocks for AsyncStorage, i18n, logger

### Professional Playground

- **5 Feature Sections** - Icons, tokens, utilities, layouts, auth
- **Interactive Demo** - See all features in action
- **SOLID Principles** - Clean, maintainable architecture
- **Development-Only** - Zero production overhead

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm** 9+ or **yarn** 3+
- **Expo CLI** (`npm install -g expo-cli`)

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/rn-base-template.git
cd rn-base-template

# Install dependencies (use --legacy-peer-deps for compatibility)
npm install --legacy-peer-deps

# Start the development server
npm start
```

### Running on Different Platforms

```bash
# iOS simulator (requires Xcode on macOS)
npm run ios

# Android emulator (requires Android Studio)
npm run android

# Web browser
npm run web

# Expo Go app (scan QR code from terminal)
# No extra commands needed - scan from `npm start` output
```

### Verify Installation

```bash
# Run all 116 tests
npm test

# View test coverage report
npm run test:coverage

# Interactive test dashboard
npm run test:ui

# Check code quality
npm run lint
```

---

## 📁 Project Structure

```
src/
├── app/                          # Expo Router routes
│   ├── _layout.tsx              # Root layout + ErrorBoundary
│   ├── index.tsx                # Home screen
│   ├── explore.tsx              # Explore screen
│   └── playground/              # Feature showcase (dev-only)
│
├── config/                       # Configuration & services
│   ├── env.ts                   # Environment variables
│   ├── http-client.ts           # Axios + interceptors + logging
│   ├── i18n.ts                  # i18next setup (EN/ES)
│   ├── logger.ts                # Centralized logging system
│
├── design/                       # Design system
│   ├── tokens.json              # 66 colors, typography, spacing
│   └── tokens.ts                # Semantic tokens + helpers
│
├── shared/                       # Shared features
│   ├── components/              # Reusable UI components
│   │   └── ErrorBoundary.tsx    # Error crash recovery
│   ├── hooks/                   # Custom React hooks
│   ├── icons/                   # 49 SVG icons + registry
│   ├── layouts/                 # 4 reusable layouts (App, Auth, Public, Modal)
│   ├── playground/              # Interactive feature showcase
│   ├── services/                # Business logic (auth, API)
│   ├── store/                   # Zustand stores + persistence
│   ├── types/                   # TypeScript interfaces
│   └── utils/                   # 39+ utility functions
│
└── constants/                    # App constants

// Utility categories (39+ functions):
//   - currency.utils.ts   → 22 functions (format, parse, precision)
//   - date.utils.ts       → 5 functions (format, relative, ISO)
//   - number.utils.ts     → 5 functions (round, format, range)
//   - validation.utils.ts → 7 functions (email, phone, URL, etc)
```

---

## 📦 Available Scripts

### Development

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm start`       | Start Expo development server |
| `npm run ios`     | Run on iOS simulator          |
| `npm run android` | Run on Android emulator       |
| `npm run web`     | Run in web browser            |

### Testing

| Command                 | Description                   |
| ----------------------- | ----------------------------- |
| `npm test`              | Run all tests once (~2.82s)   |
| `npm run test:watch`    | Watch mode for development    |
| `npm run test:coverage` | Generate HTML coverage report |
| `npm run test:ui`       | Visual test dashboard         |

### Code Quality

| Command            | Description             |
| ------------------ | ----------------------- |
| `npm run lint`     | ESLint check for issues |
| `npm run lint:fix` | Auto-fix ESLint issues  |

---

## 🧪 Testing

### Coverage Overview

```
Statements:  81.3% (87/107)   ✅ Excellent
Branches:    60.29% (41/68)   ✅ Strong
Functions:   86.95% (40/46)   ✅ Excellent
Lines:       82.82% (82/99)   ✅ Excellent
```

### Test Suite Breakdown (116 total tests)

**Store Tests (26):**

- Auth store: 8 tests ✅
- Permissions store: 8 tests ✅
- Theme store: 5 tests ✅
- Persistence middleware: 15 tests ✅

**Utility Tests (90):**

- Currency utilities: 25 tests ✅
- Date utilities: 12 tests ✅
- Number utilities: 21 tests ✅
- Validation utilities: 34 tests ✅

### Writing Tests

```typescript
import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "@/shared/store/auth.store";

describe("Auth Store", () => {
  beforeEach(() => {
    // Reset state before each test
    useAuthStore.setState({ user: null, isAuthenticated: false });
  });

  it("should set user successfully", () => {
    useAuthStore.getState().setUser({ id: "1", name: "John" });
    expect(useAuthStore.getState().user).toBeDefined();
  });
});
```

### Running Tests

```bash
# Run once
npm test

# Watch mode (re-run on changes)
npm run test:watch

# Coverage report
npm run test:coverage

# Visual UI dashboard
npm run test:ui
```

---

## 🏗️ Architecture

### State Management with Zustand

```typescript
import { useAuthStore } from "@/shared/store/auth.store";

export function MyComponent() {
  const { user, setUser, logout } = useAuthStore();

  return (
    <Button onPress={() => setUser({ id: "123", name: "John" })}>
      Update User
    </Button>
  );
}
```

**Note:** All stores automatically persist to AsyncStorage and auto-hydrate on app start.

### HTTP Client with Logging

```typescript
import { httpClient } from "@/config/http-client";

// Requests are logged automatically via interceptors
const { data: users } = await httpClient.get("/api/users");
```

### Internationalization

```typescript
import i18n from "@/config/i18n";
import { currencyUtils } from "@/shared/utils/currency.utils";

// Change language dynamically
await i18n.changeLanguage("es");

// Format according to current locale
const formatted = currencyUtils.format(1234.56, "USD");
// Output: "$1,234.56" (EN) or "1.234,56 USD" (ES)
```

### Error Handling

```typescript
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <MyScreen />
    </ErrorBoundary>
  );
}
```

Errors are caught, logged, and displayed with fallback UI.

### Centralized Logging

```typescript
import { logger } from "@/config/logger";

logger.debug("Debug info");
logger.info("Application started");
logger.warn("Deprecated feature used");
logger.error("Operation failed", error);

// Access stored logs
const recentLogs = logger.getLogs();
```

---

## 🎨 Design System Usage

### Using Design Tokens

```typescript
import { getSemanticColors } from "@/design/tokens";
import { StyleSheet } from "react-native";

const colors = getSemanticColors("light"); // or "dark"

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderColor: colors.border,
  },
});
```

### Using Icons

```typescript
import { IconRenderer } from "@/shared/icons/icon-renderer";

<IconRenderer
  name="home"        // Icon name from registry
  size={24}         // Icon size in pixels
  color="#3b82f6"   // Icon color
/>
```

All 49 available icons: home, search, settings, user, etc. See [icon registry](src/shared/icons/index.ts).

---

## 📊 Performance Optimizations

- **Tree-shaking** - Unused code removed in production builds
- **Code Splitting** - Routes loaded on-demand with Expo Router
- **Asset Optimization** - SVG icons avoid binary bloat
- **State Optimization** - Zustand's fine-grained subscriptions reduce re-renders
- **Lazy Loading** - Components loaded when needed

---

## 🔐 Security Best Practices

- **Type Safety** - 100% TypeScript strict mode
- **Input Validation** - Comprehensive validation utilities included
- **Secure Storage** - AsyncStorage + expo-secure-store ready
- **Error Sanitization** - Sensitive data filtered from logs
- **HTTPS Enforcement** - HTTP client production-ready

---

## 🚀 Deployment

### Build for Production

```bash
# Install EAS CLI
npm install -g eas-cli

# Create iOS build
eas build --platform ios

# Create Android build
eas build --platform android

# Submit to app stores
eas submit --platform ios
eas submit --platform android
```

### Environment Configuration

Create `.env` file:

```env
EXPO_PUBLIC_API_URL=https://api.example.com
EXPO_PUBLIC_APP_ENV=production
EXPO_PUBLIC_LOG_LEVEL=error
```

Access in code:

```typescript
import { env } from "@/config/env";
const apiUrl = env.apiUrl;
```

---

## 🎓 Development Workflow

### Creating a New Screen

```typescript
// app/my-feature.tsx
import { AppLayout } from "@/shared/layouts/AppLayout";
import { Text } from "react-native";

export default function MyFeatureScreen() {
  return (
    <AppLayout header="My Feature">
      <Text>Welcome to my feature!</Text>
    </AppLayout>
  );
}
```

### Adding State Management

```typescript
// shared/store/my.store.ts
import { create } from "zustand";
import { persistedStore } from "./middleware";

interface MyStore {
  count: number;
  increment: () => void;
}

export const useMyStore = create<MyStore>(
  persistedStore("my-store", (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  })),
);
```

### API Integration

```typescript
// shared/services/my.service.ts
import { httpClient } from "@/config/http-client";

export const myService = {
  fetchData: async () => {
    const { data } = await httpClient.get("/api/data");
    return data;
  },
};
```

### Writing Tests

```typescript
// shared/store/__tests__/my.store.test.ts
describe("MyStore", () => {
  it("should increment count", () => {
    useMyStore.getState().increment();
    expect(useMyStore.getState().count).toBe(1);
  });
});
```

---

## 📚 Resources

- [Expo Docs](https://docs.expo.dev/versions/v57.0.0/) - Official documentation
- [React Native Docs](https://reactnative.dev/) - Core framework
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type safety
- [Zustand GitHub](https://github.com/pmndrs/zustand) - State management
- [i18next Guide](https://www.i18next.com/) - Internationalization
- [Vitest Docs](https://vitest.dev/) - Testing framework

---

## 📈 Project Statistics

| Metric              | Value     |
| ------------------- | --------- |
| Total Commits       | 48        |
| Files Created       | 100+      |
| Lines of Code       | 5000+     |
| Test Coverage       | 81.3%     |
| Tests               | 116       |
| Utility Functions   | 39+       |
| Reusable Components | 10+       |
| Zustand Stores      | 3         |
| SVG Icons           | 49        |
| Design Colors       | 66        |
| Supported Languages | 2 (EN/ES) |
| Layouts             | 4         |

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** with clear messages (`git commit -m 'feat: add amazing feature'`)
4. **Add tests** - maintain 80%+ coverage
5. **Run checks** - `npm run lint && npm test`
6. **Push** to branch (`git push origin feature/amazing-feature`)
7. **Create** a Pull Request

### Code Standards

- ✅ **TypeScript strict mode** - All code must be type-safe
- ✅ **ESLint compliance** - Run `npm run lint` before committing
- ✅ **Test coverage** - New features require tests
- ✅ **Clean code** - Follow SOLID principles
- ✅ **Documentation** - Add comments for non-obvious logic

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Documentation

- 📖 [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - Comprehensive project documentation
- 🐛 [GitHub Issues](https://github.com/yourusername/rn-base-template/issues) - Report bugs
- 💬 [GitHub Discussions](https://github.com/yourusername/rn-base-template/discussions) - Ask questions
- 📧 Email - [your.email@example.com]

---

<div align="center">

**Made with ❤️ for the React Native community**

Give a ⭐ if this template helped you!

[⬆ Back to top](#react-native-base-template)

</div>
