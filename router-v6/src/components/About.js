import React from 'react';
import Hello from './Hello';
import {Routes,Route, Outlet, Navigate} from 'react-router-dom'
const About = () => {
    return (
        <div>
          {/* navigate用来跳转到指定位置，默认push跳转 */}
            <Navigate to={'/student/1'}/>
            <h2>关于我们，其实是四个人</h2>
            <ul>
                <li>刘备</li>
                <li>关羽</li>
                <li>张飞</li>
                <li>赵云</li>
            </ul>
            {/* 通过子路由来对hello来进行映射 */}
           {/* <Routes>
            <Route path={'hello'} element={<Hello/>}/>
           </Routes> */}

           {/* outlet表示嵌套路由中的组件
               当嵌套路由中的路径匹配成功，Outlet则表示嵌套路由中的组件
               当嵌套路由中的路径没有匹配，那他什么都不表示 */}
           <Outlet/>
        </div>
    );
};

export default About;
