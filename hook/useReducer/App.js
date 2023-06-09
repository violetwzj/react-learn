import React,{useState, useReducer} from 'react'

// 为了避免reducer会重复创建，通常reducer会定义到组件的外部
const countReducer = (state, action)=>{
  // 可以根据action中的不同type来执行不同的操作
  // if(action.type === 'ADD'){
  //   return state + 1;
  // }else if(action.type === 'SUB'){
  //   return state - 1;
  // }
  switch(action.type){
    case 'ADD':
      return state + 1;
    case 'SUB':
      return state - 1;
    default:
      return state
  }
}

function App() {
  // const [count, setCount] = useState(1);
  // const addHandler = () =>{
  //   setCount(prevState => prevState + 1)
  // }
  // const subHandler = () =>{
  //   setCount(prevState => prevState - 1)
  // }

  // useReducer(reducer, initialArg, init)
  // 参数：reducer: 整合函数
  //                对于当前的state的所有操作都应该在该函数中定义
  //                该函数的返回值，会成为state的新值
  //                reducer在执行时，会收到两个参数
  //                1.当前最新的state
  //                2.action,他需要一个对象，在这个对象中会存储dispatch所发送的指令
  //      initialArg: state的初始值，作用和useState里的值是一样的
  // 返回值：
  //      数组：
  //        第一个参数，state用来获取state的值，
  //        第二个参数，state修改的派发器
  //            通过派发器可以发送操作state的命令，具体的修改行为将会由另外一个函数(reducer)执行；
  const [count, countDispatch] = useReducer(countReducer,1)
  
  const addHandler = () => {
    // 增加count的值
    countDispatch({type:'ADD'});
  }
  const subHandler = () => {
    // 增加count的值
    countDispatch({type:'SUB'});
  }
  return (
    <div style={{fontSize:30, width:200, height:200, backgroundColor:'#bfc', margin:'100px auto', textAlign:'center'}}>
      <button onClick={subHandler}>减少</button>
      {count}
      <button onClick={addHandler}>增加</button>
    </div>
  );
}

export default App;
