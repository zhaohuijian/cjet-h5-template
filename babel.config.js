module.exports = {
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["import", { libraryName: "antd-mobile", style: true }] // `style: true` 会加载 less 文件
  ]
}
