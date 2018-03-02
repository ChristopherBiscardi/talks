module.exports = function override(config, env) {
  config.module.rules = [
    { test: /\.txt$/, use: "raw-loader" },
    ...config.module.rules
  ];
  console.log("yep");
  return config;
};
