import React from 'react'
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile'

import NavBarComponent from "../../components/navBar" //顶部导航栏

const ButtonExample = (props) => {
  return (
    <div>
      <NavBarComponent navBarText='Button 按钮' {...props} />
      <WhiteSpace size="lg" />
      <WingBlank>
        <Button>default</Button><WhiteSpace />
        <Button disabled>default disabled</Button><WhiteSpace />

        <Button type="primary">primary</Button><WhiteSpace />
        <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

        <Button type="warning">warning</Button><WhiteSpace />
        <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

        <Button loading>loading button</Button><WhiteSpace />
        <Button icon="check-circle-o">with icon</Button><WhiteSpace />
        <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
        <Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>with icon and inline</Button>
        <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
        <WhiteSpace />

        {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
        {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

        <WhiteSpace />
        <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
        {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
        <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">inline ghost</Button>

        <WhiteSpace />
        <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
        <Button type="primary" inline size="small" disabled>primary disabled</Button>
        <WhiteSpace />
        <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
        {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
        <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button>
      </WingBlank>

      <WhiteSpace size="lg" />

      <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
        <List.Item
          extra={<Button type="ghost" size="small" inline>small</Button>}
          multipleLine
        >
          Regional manager
      <List.Item.Brief>
            Can be collected, refund, discount management, view data and other operations
      </List.Item.Brief>
        </List.Item>
        <List.Item
          extra={<Button type="primary" size="small" inline>small</Button>}
          multipleLine
        >
          Regional manager
      <List.Item.Brief>
            Can be collected, refund, discount management, view data and other operations
      </List.Item.Brief>
        </List.Item>
      </List>
    </div>
  )
}

export default ButtonExample
