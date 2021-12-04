// 4.2 导入path模块
const path = require("path");
// 6.1 导入 html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 1.1 导出一个对象 nodejs的模块定义
module.exports = {
    // 5.1 配置mode
    mode: "production", // production/development 模式

    // 2.1 程序的入口
    entry: {
        // 2.2. 入口名字: index，入口路径：'...'
        index: "./lib/index.tsx"
    },
    // 7.1 配置resolve
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    // 4.1 程序的出口 输出的目录位置
    output: {
        path: path.resolve(__dirname, "dist/lib"), // 当前目录__dirname 因为操作系统不同 所以需要配置path
        library: "PiggyUI", // 4.3 库的名字
        libraryTarget: "umd"
    },

    // 3.1 配置module 以解释tsx文件
    module: {
        rules: [
            {
                // 3.2 命中 .tsx 文件
                test: /\.tsx?$/, // 如何知道一个文件是tsx？
                loader: "awesome-typescript-loader" // yarn add awesome-typescript-loader --dev
            }
        ]
    },
    // 6.2 配置plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "PiggyUI",
            template: "index.html"
        })
    ]
};