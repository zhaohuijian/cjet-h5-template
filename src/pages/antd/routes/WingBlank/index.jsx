import React from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import style from './style.module.css'
import NavBarComponent from '../../components/navBar'

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} ${style.placeholder}`} {...restProps}>Block</div>
);

const WingBlankExample = (props) => {

  return (
    <div>
      <NavBarComponent navBarText=' WingBlank 两翼留白' {...props} />
      <WhiteSpace size="lg" />

      <div style={{ padding: '15px 0' }}>
        <WingBlank><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md"><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm"><PlaceHolder /></WingBlank>
      </div>
    </div>
  )
};

export default WingBlankExample
