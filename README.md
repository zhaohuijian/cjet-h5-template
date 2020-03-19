<p align="center">
    <img width="250" src="https://user-images.githubusercontent.com/9346030/77044974-53b06b80-69fb-11ea-89ad-fab16eddd48f.png">
</p>

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

- 在 html 页面模板中添加兼容方案

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
      propList: ["*", "!font*"], //可以从px更改为rem的属性,字体相关属性不转换
      selectorBlackList: [], //要忽略的选择器
      replace: true, //替换包含rems的规则，而不是添加fallback
      mediaQuery: false, //允许在媒体查询中转换px
      minPixelValue: 2 //设置要替换的最小像素值
    }
  }
};
```

- 新建`rem.js` 并在入口`index.js`中引入

```js
const baseSize = 32;
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

Tip: 使用大写可以忽略项目中无需转换的属性值

```css
// `px` is converted to `rem`
.convert {
  font-size: 16px; // converted to 1rem
}

// `Px` or `PX` is ignored by `postcss-pxtorem` but still accepted by browsers
.ignore {
  border: 1px solid; // ignored
  border-width: 2px; // ignored
}
```

## 使用 PWA（渐进式 WEB 应用程序）

已集成业内开发一流的 [Progressive Web App](https://web.dev/progressive-web-apps/) 的最佳实践，项目中包含一个`src/serviceWroker.js`文件，用于开发渐进式应用程序，在应用程序入口脚本（`src/index.tsx`）默认状态是未注册，如果要使用 PWA，需要在应用入口将 `serviceWorker.unregister()` 更改为 `serviceWorker.register()`。

离线优先的 Progressive Web Apps（渐进式 Web 应用程序）比传统网页更快，更可靠，并提供了很好的移动体验：

- 无论网络连接如何（例如 2G 或 3G），所有静态站点资源都会被缓存，以便你的页面在后续访问中快速加载。更新将在后台下载。
- 无论网络状态如何，即使离线，你的应用也能正常运行。这意味着你的用户将能够在 1 万英尺的高空和地铁上使用你的应用程序。
- 在移动设备上，你的应用可以直接添加到用户的主屏幕，应用图标和所有内容。这消除了对 app 商店的需求。

本项目使用 cjet 作为工程构建工具，工程框架已集成[workbox-webpack-plugin](https://github.com/GoogleChrome/workbox)，它将负责生成 service worker 文件，该文件将自动预先缓存所有本地资源，并在部署更新时使其保持最新。 service worker 将使用 缓存优先策略 来处理对本地资源的所有请求，包括 HTML 的 导航请求，确保你的 Web 应用程序始终保持快速，即使在缓慢或不可靠的网络上也是如此。

可以通过`cjet.config.js`文件对`workbox-webpack-plugin`进行更多高级配置：

```js
//cjet.config.js

module.exports = {
  /**
   * PWA的workbox-webpack-plugin配置
   * More info see: https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
   */
  pwa: {
    mode: "GenerateSW", // GenerateSW or InjectManifest
    options: {
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: "cdn",
      navigateFallback: "/index.html",
      navigateFallbackBlacklist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp("^/_"),
        // Exclude any URLs whose last part seems to be a file extension
        // as they're likely a resource and not a SPA route.
        // URLs containing a "?" character won't be blacklisted as they're likely
        // a route with query params (e.g. auth callbacks).
        new RegExp("/[^/?]+\\.[^/]+$")
      ]
    }
  }
};
```

**开发渐进式应用程序（PWA）的注意事项**

开发渐进式 WEB 应用程序使调试部署更具挑战性，如果决定选择加入 service worker 注册，需考虑以下因素：

- 初始缓存完成后，[service worker 生命周期](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle) 控制何时更新的内容最终显示给用户。默认行为是保守地使更新的 service worker 保持 ["waiting"](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#waiting) 状态。这意味着用户最终会看到旧内容，直到他们关闭（重新加载）现有的打开标签。
- 用户并不总是熟悉离线优先 Web 应用程序。[让用户知道 service worker 何时完成填充缓存](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux)（显示 "This web app works offline!（此 Web 应用程序脱机工作！）"消息），并让他们知道 service worker 何时获取可用的最新更新可能很有用。
- service worker [需要 HTTPS](https://developers.google.com/web/fundamentals/primers/service-workers#you_need_https)，但为了便于本地测试，该策略[不适用于 localhost](https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385) 。如果你的生产 Web 服务器不支持 HTTPS ，则服务工作者注册将失败，但你的 Web 应用程序的其余部分仍将保持正常运行。
- service worker 仅在 生产环境 中启用，建议你不要在开发环境中启用离线优先 service worker 程序，因为它可能会导致使用以前缓存的资源时无效，并且不包括你在本地进行的最新更改。
- 如果 需要 在本地测试离线优先 service worker ，请构建应用程序（使用 `yarn build` ）并从构建目录运行简单的 http 服务器。
- 默认情况下，生成的 service worker 文件不会拦截或缓存任何跨源资源，如 HTTP API 请求，图片或从其他域名加载的嵌入。

**渐进式 Web 应用程序元 Metadata**

默认配置包含的 Web 应用程序 manifest 位于 `public/manifest.json` ，你可以使用特定于 Web 应用程序的详细信息进行自定义。

当用户在 Android 上使用 Chrome 或 Firefox 将网络应用添加到其主屏幕时，`manifest.json` 中的元数据可以设置显示网络应用时需要使用的图标，名称和品牌颜色（branding colors）。 [Web App Manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) 指南 提供了有关每个字段的含义以及你的自定义将如何影响用户体验的更多信息。

已添加到主屏幕的渐进式 Web 应用程序将加载更快，并在激活 service worker 时脱机工作。话虽如此，无论你是否选择性加入 service worker 注册，Web 应用程序清单中的元数据仍将被使用。

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [chanjet-fe](https://github.com/chanjet-fe).
