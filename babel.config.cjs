module.exports = (api) => {
  const isTest = api.env() === "test";

  if (isTest) {
    return {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
      plugins: [],
    };
  }

  // For non-test environments (dev/prod), use Expo's preset
  return {
    presets: ["babel-preset-expo"],
  };
};
