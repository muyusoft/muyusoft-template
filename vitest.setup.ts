/**
 * Vitest setup file
 * Mocks for React Native and Expo modules
 */
import { vi } from "vitest";

// Mock AsyncStorage
vi.mock("@react-native-async-storage/async-storage", () => ({
  default: {
    getItem: vi.fn(() => Promise.resolve(null)),
    setItem: vi.fn(() => Promise.resolve()),
    removeItem: vi.fn(() => Promise.resolve()),
    clear: vi.fn(() => Promise.resolve()),
  },
}));

// Mock expo-secure-store
vi.mock("expo-secure-store", () => ({
  getItemAsync: vi.fn(() => Promise.resolve(null)),
  setItemAsync: vi.fn(() => Promise.resolve()),
  deleteItemAsync: vi.fn(() => Promise.resolve()),
}));

// Mock i18next
vi.mock("@/config/i18n", () => ({
  default: {
    t: (key: string) => key,
    changeLanguage: vi.fn(),
    language: "en",
  },
}));

// Mock logger
vi.mock("@/config/logger", () => ({
  logger: {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    getLogs: vi.fn(() => []),
    exportLogs: vi.fn(() => ""),
    clear: vi.fn(),
  },
}));

// Suppress console in tests
global.console.error = vi.fn();
global.console.warn = vi.fn();
