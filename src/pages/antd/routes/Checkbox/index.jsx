/* eslint-disable */
import React from 'react'
import { List, Checkbox, Flex, WhiteSpace } from 'antd-mobile';

import NavBarComponent from "../../components/navBar" //顶部导航栏

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class CheckboxComponent extends React.Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];
    return (
      <div>
        <NavBarComponent navBarText='Checkbox 复选框' {...this.props} />
        <WhiteSpace size="lg" />
        <List renderHeader={() => 'CheckboxItem demo'}>
          {data.map(i => (
            <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </CheckboxItem>
          ))}
          <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
            Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
          </CheckboxItem>
        </List>

        <Flex>
          <Flex.Item>
            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>

              Agree <a onClick={
                // eslint-disable-next-line
                (e) => {
                  // eslint-disable-next-line
                  e.preventDefault();
                  // eslint-disable-next-line
                  alert('agree it');
                }}>agreement</a>
            </AgreeItem>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default CheckboxComponent
