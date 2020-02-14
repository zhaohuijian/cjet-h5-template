import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import styles from './App.module.less';

import customIcon from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
        <div className={styles['App-header']}>
          <img className={styles['App-logo']} src={customIcon} alt="" />
          <h2>Welcome to cjet-h5</h2>
        </div>
        <p className={styles['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          More info see: https://github.com/chanjet-fe/cjet-h5-template
        </p>
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
