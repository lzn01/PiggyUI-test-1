// 1. 导出一个对象
module.exports = {
    // 2.1 程序的入口
    entry: {
        // 2.2. 入口名字: index，入口路径：'...'
        index: './lib/index.tsx'
    },
    // 3.1 配置module 以解释tsx文件
    module: {
        rules: [
            {
                // 3.2 命中 .tsx 文件
                test: /\.tsx?$/, // 如何知道一个文件是tsx？
                loader: "awesome-typescript-loader" // yarn add awesome-typescript-loader --dev
            },
        ]
    }
}