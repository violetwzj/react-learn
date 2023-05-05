import React from 'react'
import './store/index'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setAge } from './store/stuSlice'
import { setName as setSchoolName, setAddress } from './store/schoolSlice'
export default function App() {
  // // useSelector()用来加载state中的数据
  // const student = useSelector(state => state.student);

  // // 引入学校的信息
  // const school = useSelector(state => state.school);
  const {student, school} = useSelector(state =>state)
  // 通过dispatch()来获取派发器对象
  const dispatch = useDispatch();
  // 获取action的构建器


  const setNameHandler = () =>{
    dispatch(setName('沙和尚'))
  }
  const setAgeHandler = () =>{
    dispatch(setAge(33))
  }

  return (
    <div>
      <p>{student.name}--
         {student.age}--
         {student.gender}--
         {student.address}--</p>
      <button onClick={setNameHandler}>修改name</button>
      <button onClick={setAgeHandler}>修改age</button>

      <hr/>
      <p>{school.name}---
          {school.address}---</p>
      <button onClick={()=>dispatch(setSchoolName('高老庄'))}>修改学校名字</button>
      <button onClick={()=>dispatch(setAddress('仙林大道'))}>修改学校地址</button>
    </div>
  )
}
