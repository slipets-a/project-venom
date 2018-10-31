export const common = (path, plugins) => ({
    entry: {
        app: path.entry.app
    },
    output: {
        filename: 'js/[name].bundle.[hash:8].js',
        path: path.output
    },
    plugins: [plugins.cleanPlugin(path.output), plugins.htmlPlugin, plugins.hotModuleReplacementPlugin],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 85
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '85-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    stats: {
        colors: true,
        env: true
    }
});
