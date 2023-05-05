import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';



/*
BrowserRouter会通过url地址中的hash值来对地址进行匹配

将url与组件进行映射
当用户访问某个地址时，与其对应的组件会自动的挂载
当通过link构建的链接进行跳转时，没有经过服务器。
但当刷新页面，或者通过普通链接进行跳转时，会向服务器发送请求加载数据
这时候的请求没有经过react-router ，所以会返回404

解决方案： 1.使用hashrouter,服务器不会去判断hash值，所以使用hashrouter后请求将会由reactrouter处理
          2.修改服务器配置，将所有请求都转发到index.html
react router使用步骤
1.引入react-router-dom包
2.在index.js里引入BrowserRouter
3.将其设置为根组件

*/
document.documentElement.style.fontSize = 100/750 + 'vw'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <App/>
  </Router>

  
);

