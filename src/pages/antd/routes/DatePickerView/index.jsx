import React from 'react'
import { DatePickerView, WhiteSpace } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
import NavBarComponent from "../../components/navBar" //顶部导航栏

import style from './style.module.css'

class DatePickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };
  onValueChange = (...args) => {
    console.log(args);
  };
  render() {
    return (
      <div>
        <NavBarComponent navBarText='DatePickerView 选择器' {...this.props} />
        <WhiteSpace size="lg" />
        <div className={style["sub-title"]}>Start datetime</div>
        <DatePickerView
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
        <div className={style["sub-title"]}>End datetime</div>
        <DatePickerView
          locale={enUs}
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </div>
    );
  }
}

export default DatePickerViewExample
