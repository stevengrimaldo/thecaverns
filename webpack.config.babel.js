import webpack from 'webpack';
import path from 'path';

// Plugins
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

// Postcss
import lineheightconversion from 'postcss-line-height-px-to-unitless';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import lost from 'lost';

export default {
  context: path.resolve(__dirname, './src'),
  devtool: 'source-map',
  entry: {
    app: './js/app'
  },
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, './static'),
    publicPath: './'
  },
  resolve: {
    symlinks: false,
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!webpack-dev-server)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  lineheightconversion(),
                  lost(),
                  cssnext({
                    browsers: ['> 1%', 'last 2 versions']
                  }),
                  cssnano({
                    autoprefixer: false,
                    mergeRules: false,
                    zindex: false
                  })
                ]
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': 'development' }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
        screw_ie8: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].min.css',
      allChunks: true
    }),
    new StyleLintPlugin({
      context: './src/scss',
      syntax: 'scss'
    }),
    new CopyWebpackPlugin(
      [
        {
          from: './media/',
          to: './media/'
        }
      ],
      { ignore: ['.DS_Store'] }
    ),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '60-80'
      },
      jpegtran: {
        progressive: true
      },
      svgo: {
        removeViewBox: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './html/index.html',
      minifiy: {
        collapseWhitespace: true
      },
      favicon: '../favicon.ico',
      // cache: true,
      inject: 'body'
    }),
    new BrowserSyncPlugin({
      server: { baseDir: ['static'] }
    })
  ]
};
