# cjet-h5-template

基于 antDesign Mobile 组件库，零配置、快速开发、构建移动端 H5 的企业级应用。

### 基本特性：

- 开发 H5 企业级应用的标准化模板
- 基于 antdMobile 基础组件库
- 使用 Less 及 cssModule 编写样式
- 使用 typescript
- 使用 svg symbol 图标解决方案
- 集成 PWA
- 支持 antd 组件主题定制
- 集成工程化开发及构建的最佳实践

## 快速开始

```bash
npx create-cjet-h5 chanjet-mobile

cd chanjet-mobile

npm run dev #开发环境

npm run build #生产构建
```

## 使用移动端 viewport 适配方案

- 安装依赖

```bash
yarn add postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-viewport-units cssnano cssnano-preset-advanced
```

- 项目根目录下创建`postcss.config.js`文件

```js
module.exports = {
  plugins: {
    "postcss-aspect-ratio-mini": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-write-svg": {
      uft8: false
    },
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: [".ignore", ".hairlines"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    },
    "postcss-viewport-units": {},
    cssnano: {
      preset: "advanced",
      autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
      "postcss-zindex": false
    }
  }
};
```

#### ToDo...

- 集成移动端 REM 适配方案。

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [chanjet-fe](https://github.com/chanjet-fe).
