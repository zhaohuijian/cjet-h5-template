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

## 使用移动端 viewport(VW,VH) 适配方案

项目中根据设计图照常编写`px`单位，工程框架会自动编译成`vw`或`vh`单位。

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

- 在html页面模板中添加兼容方案

可以直接使用阿里 CDN 或是参考：`https://www.npmjs.com/package/viewport-units-buggyfill`。

```html
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>

<!--使用viewport-units-buggyfill解决个别手机不支持vw-->
<script>
  window.onload = function() {
    window.viewportUnitsBuggyfill.init({
      hacks: window.viewportUnitsBuggyfillHacks
    });
  };
</script>
```

## 使用移动端 REM 适配方案

项目中根据设计图照常编写`px`单位，工程框架会自动编译成`rem`单位。

- 安装依赖

```bash
yarn add postcss-pxtorem
```

- 项目根目录下创建`postcss.config.js`文件

```js
module.exports = {
  plugins: {
    /**
     * 更多配置请参考：https://www.npmjs.com/package/postcss-pxtorem
     */
    "postcss-pxtorem": {
      rootValue: 32, //结果为：设计稿元素尺寸/32,最终页面会换算成 10rem
      unitPrecision: 5, //允许REM单位增长到的十进制数
      propList: ["*"], //可以从px更改为rem的属性
      selectorBlackList: [], //要忽略的选择器
      replace: true, //替换包含rems的规则，而不是添加fallback
      mediaQuery: false, //允许在媒体查询中转换px
      minPixelValue: 0 //设置要替换的最小像素值
    }
  }
};
```

- 新建`rem.js` 并在入口`index.js`中引入

```js
const baseSize = 32; //与 rootValue大小一致
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750;
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [chanjet-fe](https://github.com/chanjet-fe).
