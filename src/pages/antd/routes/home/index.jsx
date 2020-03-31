import React, { Component } from "react";
import { List, WhiteSpace } from "antd-mobile";
import styles from "./App.module.less";
import SvgIcon from "@src/components/svgIcon";

const Item = List.Item;

class App extends Component {
  itemLink = (linkTo) => {
    const { history } = this.props
    history.push(linkTo)
  }
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
            <Item onClick={() => { this.itemLink('/Flex') }}>
              <SvgIcon iconName="component" /> Flex Flex布局
            </Item>
            <Item onClick={() => { this.itemLink('/WingBlank') }}>
              <SvgIcon iconName="component" /> WingBlank 两翼留白
            </Item>
            <Item onClick={() => { this.itemLink('/WhiteSpace') }}>
              <SvgIcon iconName="component" /> WhiteSpace 上下留白
            </Item>
          </List>
          <WhiteSpace size="lg" />
          <List renderHeader={() => "数据录入"} className="my-list">
            <Item onClick={() => { this.itemLink('/Button') }}>
              <SvgIcon iconName="component" /> Button 按钮
            </Item>
            <Item onClick={() => { this.itemLink('/Checkbox') }}>
              <SvgIcon iconName="component" /> Checkbox 复选框
            </Item>
            <Item onClick={() => { this.itemLink('/Calendar') }}>
              <SvgIcon iconName="component" /> Calendar 日历
            </Item>
            <Item onClick={() => { this.itemLink('/DatePickerView') }}>
              <SvgIcon iconName="component" /> DatePickerView 选择器
            </Item>
            <Item onClick={() => { this.itemLink('/DatePicker') }}>
              <SvgIcon iconName="component" /> DatePicker 日期选择
            </Item>
            <Item onClick={() => { this.itemLink('/InputItem') }}>
              <SvgIcon iconName="component" /> InputItem 文本输入
            </Item>
          </List>
          <WhiteSpace size="lg" />

        </div>
      </div>
    );
  }
}

export default App;
