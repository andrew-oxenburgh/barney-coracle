module.exports = function(api) {
  api.cache(true);
  return {
     plugins: [
        "react-require"
     ],
    presets: ['babel-preset-expo'],
  };
};
