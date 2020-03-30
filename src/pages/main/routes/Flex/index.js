import React from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';
import style from './style.module.css'
import NavBarComponent from '../../components/navBar'

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} ${style.placeholder}`} {...restProps}>Block</div>
);



const FlexExample = (props) => {


  return (
    <div>
      <NavBarComponent navBarText='Flex布局' {...props} />
      <WhiteSpace size="lg" />
      <div className={style['flex-container']}>
        <div className={style['sub-title']}>Basic</div>
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />

        <div className={style['sub-title']}>Wrap</div>
        <Flex wrap="wrap">
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
        </Flex>
        <WhiteSpace size="lg" />

        <div className={style['sub-title']}>Align</div>
        <Flex justify="center">
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
        </Flex>
        <WhiteSpace />
        <Flex justify="end">
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
        </Flex>
        <WhiteSpace />
        <Flex justify="between">
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
          <PlaceHolder className={style.inline} />
        </Flex>

        <WhiteSpace />
        <Flex align="start">
          <PlaceHolder className={style.inline} />
          <PlaceHolder className="inline small" />
          <PlaceHolder className={style.inline} />
        </Flex>
        <WhiteSpace />
        <Flex align="end">
          <PlaceHolder className={style.inline} />
          <PlaceHolder className="inline small" />
          <PlaceHolder className={style.inline} />
        </Flex>
        <WhiteSpace />
        <Flex align="baseline">
          <PlaceHolder className={style.inline} />
          <PlaceHolder className="inline small" />
          <PlaceHolder className={style.inline} />
        </Flex>
      </div>
    </div>
  )
};

export default FlexExample
