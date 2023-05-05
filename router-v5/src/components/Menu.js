import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import classes from './Menu.module.css';
export default function Menu() {
  // 在react router时，不要使用a标签
  // 因为a标签创建超链接会自动向服务器发请求重新加载页面
  // 使用link标签
  return (
    <div>
      <ul>
        <li>
          {/* <a href='/'>主页</a> */}
          <NavLink 
          exact
          // activeClassName={classes.active} 
          activeStyle = {{textDecoration: 'underline'}}
          to='/'>主页</NavLink>
        </li>
        <li>
        <NavLink
         exact 
        activeClassName={classes.active} to='/about'>关于</NavLink>
        </li>
        <li>
        <NavLink
         exact 
        activeClassName={classes.active} to='/student'>student</NavLink>
        </li>
      </ul>
    </div>
  )
}
