import React from 'react'

export default function About(props) {

  const clickHandler = () =>{
    //push需要一个location作为参数
    // props.history.push({
    //   pathname:'/student/2'
    // });
    props.history.replace({
      pathname: '/student/2',
      state:{name:'vv'}
    })
  }
  return (
    <div>
      <button onClick={clickHandler}>点我一下</button>
      <h1>
      About
      </h1>
      <ul>
        <li>孙悟空</li>
        <li>猪八戒</li>
        <li>沙和尚</li>
        <li>唐僧</li>
      </ul>
    </div>
  )
}
