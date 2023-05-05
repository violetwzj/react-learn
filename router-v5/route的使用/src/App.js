import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu';
import Student from './components/Student';


export default function App() {
  return (
    <div>
      <Menu/>
      {/* 将路由和组件进行映射 
      使用Route来映射地址和组件
      属性：
      path是映射的url地址
      component是要展示的组件
      component 需要直接传递组件的类
      通过component构建的组件，他会自动创建组件且会自动传递参数
      1.match---匹配的信息
        isExact 检查路径是否完全匹配
        params 请求的参数
      2.location---地址信息
      3.history---控制页面的跳转
        push()跳转页面
        replace()替换页面*/}
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    {/* /student/:id 会匹配到、student/xxx */}
    {/* <Route path='/student/:id' component={Student}/> */}
    
    {/* render也可以指定要挂在的组件
    需要一个回调函数作为参数，回调函数的返回值会最终被挂载
    render不会自动传递三个属性 */}
    {/* <Route path='/student/:id' render={(routeProps)=>{
      console.log(routeProps)
      return <Student match={routeProps.match}/>
    }}/>
     */}

     {/* children也可以指定被挂载的组件
        用法：1. 和render类似，传递回调函数
                ---当children设置一个回调函数时，该组件无论路径是否匹配都会挂载

              2.可以直接传递组件 */}
    {/* <Route path='/student/:id' children={(routeProps)=>{
      return <Student match={routeProps.match}/>
    }}/> */}
    <Route path='/student/:id' children={<Student/>}/>

    </div>
  )
}
