const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.pdf$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  });
};
