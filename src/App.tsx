import React, { Component } from "react";
import { Button, List, WhiteSpace } from "antd-mobile";
import styles from "./App.module.less";
import SvgIcon from "./components/svgIcon";

const Item = List.Item;

class App extends Component {
  render() {
    return (
      <div className={styles["App"]}>
        <div className={styles["App-header"]}>
          <svg aria-hidden="true" className={styles["App-logo"]}>
            <use xlinkHref="#icon-logo"></use>
          </svg>
          <h2>
            <SvgIcon iconName="logo" /> Welcome to cjet-h5
          </h2>
        </div>
        <div>
          <List renderHeader={() => "基本特性"} className="my-list">
            <Item>
              <SvgIcon iconName="template" /> 开发 H5 企业级应用的标准化模板
            </Item>
            <Item>
              <SvgIcon iconName="antd-mobile" /> 基于antd mobile基础组件库
            </Item>
            <Item>
              <SvgIcon iconName="less" /> 使用 Less 及 cssModule 编写样式
            </Item>
            <Item>
              <SvgIcon iconName="typescript" /> 使用 typescript
            </Item>
            <Item>
              <SvgIcon iconName="svg" /> 使用 svg symbol 图标解决方案
            </Item>
            <Item>
              <SvgIcon iconName="pwa" /> 集成 PWA
            </Item>
            <Item>
              <SvgIcon iconName="theme" fill="#ff0000" /> 支持 antd 组件主题定制
            </Item>
            <Item>
              <SvgIcon iconName="logo" /> 集成工程化开发及构建的最佳实践
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <Button
            onClick={() => (window.location.href = "./antd.html")}
            type="primary"
          >
            查看组件库示例
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
