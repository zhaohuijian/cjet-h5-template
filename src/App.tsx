import React, { Component } from "react";
import { Button } from "antd-mobile";
import styles from "./App.module.less";
import SvgIcon from "./components/svgIcon";

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
        <p>
          <SvgIcon iconName="antd-mobile" /> 基于antd mobile基础组件库
        </p>
        <p className={styles['theme-icon']}>
          <SvgIcon iconName="theme" fill="#ff0000" /> 支持antd mobile组件主题定制
        </p>
        <p className={styles["App-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>More info see: https://github.com/chanjet-fe/cjet-h5-template</p>
        <Button type="primary">这是一个antd mobile组件库中的按钮</Button>
      </div>
    );
  }
}

export default App;
