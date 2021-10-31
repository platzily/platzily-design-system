const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@platzily-ui/styling': path.resolve(__dirname, './packages/styling/src'),
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
};
