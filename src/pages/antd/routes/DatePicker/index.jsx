import React from "react";
import { DatePicker, List, WhiteSpace, Button, InputItem } from "antd-mobile";
import enUs from "antd-mobile/lib/date-picker/locale/en_US";
import { createForm } from "rc-form";

import style from "./style.module.css";

import NavBarComponent from "../../components/navBar"; //顶部导航栏

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

const utcOffset = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
// console.log(now, utcOffset, now.toISOString(), utcOffset.toISOString());

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(
    maxDate.getFullYear(),
    maxDate.getMonth(),
    maxDate.getDate()
  );
}

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => (n < 10 ? `0${n}` : n);
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
const CustomChildren = ({ extra, onClick, children }) => (
  <div
    onClick={onClick}
    style={{
      backgroundColor: "#fff",
      height: "45px",
      lineHeight: "45px",
      padding: "0 15px"
    }}
  >
    {children}
    <span style={{ float: "right", color: "#888" }}>{extra}</span>
  </div>
);

class DatePickerComponent extends React.Component {
  state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: now,
    customChildValue: null,
    visible: false,
    // dpValue: now,
    idt: utcOffset.toISOString().slice(0, 10)
  };
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, error => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        console.log(error);
        alert("Validation failed");
      }
    });
  };
  onReset = () => {
    this.props.form.resetFields();
    setTimeout(() => console.log(this.state), 0);
  };
  validateIdp = (rule, date, callback) => {
    if (isNaN(Date.parse(date))) {
      callback(new Error("Invalid Date"));
    } else {
      const cDate = new Date(date);
      const newDate = new Date(+this.state.dpValue);
      newDate.setFullYear(cDate.getFullYear());
      newDate.setMonth(cDate.getMonth());
      newDate.setDate(cDate.getDate());
      // this.setState({ dpValue: newDate });
      setTimeout(() => this.props.form.setFieldsValue({ dp: newDate }), 10);
      callback();
    }
  };
  validateDatePicker = (rule, date, callback) => {
    if (date && date.getMinutes() !== 15) {
      callback();
    } else {
      callback(new Error("15 is invalid"));
    }
  };
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
        <NavBarComponent navBarText="DatePicker 日期选择" {...this.props} />
        <WhiteSpace size="lg" />
        <h3>基本示例</h3>
        <List
          className={style["date-picker-list"]}
          style={{ backgroundColor: "white" }}
        >
          <DatePicker
            value={this.state.date}
            onChange={date => this.setState({ date })}
          >
            <List.Item arrow="horizontal">Datetime</List.Item>
          </DatePicker>
          <DatePicker
            mode="date"
            title="Select Date"
            extra="Optional"
            value={this.state.date}
            onChange={date => this.setState({ date })}
          >
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>

          <DatePicker
            mode="time"
            minuteStep={2}
            use12Hours
            value={this.state.time}
            onChange={time => this.setState({ time })}
          >
            <List.Item arrow="horizontal">Time (am/pm)</List.Item>
          </DatePicker>
          <DatePicker
            mode="time"
            minDate={minDate}
            maxDate={maxDate}
            value={this.state.time}
            onChange={time => this.setState({ time })}
          >
            <List.Item arrow="horizontal">Limited time</List.Item>
          </DatePicker>

          <DatePicker
            mode="time"
            locale={enUs}
            format={val => `UTC Time: ${formatDate(val).split(" ")[1]}`}
            value={this.state.utcDate}
            onChange={date => this.setState({ utcDate: date })}
          >
            <List.Item arrow="horizontal">UTC time</List.Item>
          </DatePicker>

          <List.Item
            extra={this.state.dpValue && formatDate(this.state.dpValue)}
            onClick={() => this.setState({ visible: true })}
          >
            External control visible state
          </List.Item>
          <DatePicker
            visible={this.state.visible}
            value={this.state.dpValue}
            onOk={date => this.setState({ dpValue: date, visible: false })}
            onDismiss={() => this.setState({ visible: false })}
          />

          <DatePicker
            mode="time"
            format="HH:mm"
            title="Select Time"
            value={this.state.customChildValue}
            onChange={v => this.setState({ customChildValue: v })}
            extra="click to choose"
          >
            <CustomChildren>With customized children</CustomChildren>
          </DatePicker>
        </List>
        <h3>form 表单示例</h3>
        <form>
          <List
            className={style["date-picker-list"]}
            renderFooter={() =>
              getFieldError("dp") && getFieldError("dp").join(",")
            }
          >
            <InputItem
              placeholder="must be the format of YYYY-MM-DD"
              error={!!getFieldError("idp")}
              {...getFieldProps("idp", {
                initialValue: this.state.idt,
                rules: [{ validator: this.validateIdp }]
              })}
            >
              Input date
            </InputItem>
            <DatePicker
              {...getFieldProps("dp", {
                initialValue: this.state.dpValue,
                rules: [
                  { required: true, message: "Must select a date" },
                  { validator: this.validateDatePicker }
                ]
              })}
            >
              <List.Item arrow="horizontal">Date</List.Item>
            </DatePicker>
            <List.Item>
              <Button
                type="primary"
                size="small"
                inline
                onClick={this.onSubmit}
              >
                Submit
              </Button>
              <Button
                size="small"
                inline
                style={{ marginLeft: "2.5px" }}
                onClick={this.onReset}
              >
                Reset
              </Button>
            </List.Item>
          </List>
        </form>
      </div>
    );
  }
}

export default createForm()(DatePickerComponent);
