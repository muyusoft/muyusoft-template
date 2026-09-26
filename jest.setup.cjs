/**
 * Jest setup file
 * Configures testing environment and polyfills
 */

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Mock expo-secure-store
jest.mock("expo-secure-store", () => ({
  getItemAsync: jest.fn(),
  setItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}));

// Mock i18next
jest.mock("i18next", () => ({
  t: (key) => key,
  changeLanguage: jest.fn(),
  language: "en",
}));

// Suppress console errors in tests
global.console.error = jest.fn();
global.console.warn = jest.fn();
