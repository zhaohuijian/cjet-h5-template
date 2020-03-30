import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { List, WhiteSpace } from "antd-mobile";
import styles from "./App.module.less";
import SvgIcon from "@src/components/svgIcon";

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
            cjet & antdMobile 组件库
          </h2>
        </div>
        <div>
          <List renderHeader={() => "布局"} className="my-list">
            <Link to="/Flex">
              <Item>
                <SvgIcon iconName="component" /> Flex Flex布局
            </Item>
            </Link>
            <Link to="/WingBlank">
              <Item>
                <SvgIcon iconName="component" /> WingBlank 两翼留白
            </Item>
            </Link>
            <Link to="/WhiteSpace">
              <Item>
                <SvgIcon iconName="component" /> WhiteSpace 上下留白
            </Item>
            </Link>
          </List>
          <WhiteSpace size="lg" />
          <List renderHeader={() => "数据录入"} className="my-list">
            <Link to="/Button">
              <Item>
                <SvgIcon iconName="component" /> Button 按钮
            </Item>
            </Link>
            <Link to="/Checkbox">
              <Item>
                <SvgIcon iconName="component" /> Checkbox 复选框
            </Item>
            </Link>
            <Link to="/Calendar">
              <Item>
                <SvgIcon iconName="component" /> Calendar 日历
            </Item>
            </Link>
            <Link to="/InputItem">
              <Item>
                <SvgIcon iconName="component" /> InputItem 文本输入
            </Item>
            </Link>
          </List>
          <WhiteSpace size="lg" />

        </div>
      </div>
    );
  }
}

export default App;
