import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 讲解useState和useEffect的实例
import App from './App';
// 讲解useContext和useReducer的实例
import Example from './Example';
// 讲解使用useContext和useReducer实现redux工作流的实例
import Redux from './redux';
// 讲解使用useMemo保护性能
import Memo from './memo';
// 讲解使用useRef进行元素绑定
import Ref from './ref';

import * as serviceWorker from './serviceWorker';

function Index() {
  return (
    <div style={{padding: 20}}>
      <Ref />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
