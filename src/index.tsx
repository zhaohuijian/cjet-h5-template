import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './icons'

ReactDOM.render(<App />, document.getElementById('root'));

// 如果你希望应用程序能脱机工作并加载更快，
// 那么可以将下面的 unregister() 改为 register()。
serviceWorker.unregister();
