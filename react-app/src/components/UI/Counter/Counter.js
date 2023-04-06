import React, { useContext } from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/CartContext'
// 引入fontawesome
// -安装依赖
// npm i --save @fortawesome/fontawesome-svg-core
// # Free icons styles
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest


//计数器组件
const Counter= (props) => {
    //用钩子函数把数据勾进来
    const ctx = useContext(CartContext);




    //添加购物车的函数
    const addButtonHander = () =>{
        ctx.addItem(props.meal)
    }
    //删除食物的函数
    const subButtonHander = () =>{
        ctx.removeItem(props.meal)
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount!==0) ? (
                <>
                <button 
                onClick={subButtonHander}
                    className={classes.Sub}>
                        <FontAwesomeIcon 
                        icon={faMinus}/>
                        </button>
                <span className={classes.count}>{props.meal.amount}</span>
                </>
                ) : null
            }  
            <button
                onClick={addButtonHander} 
                className={classes.Add}>
                <FontAwesomeIcon icon={faPlus}/>
                </button>
        </div>
    )
}

export default Counter;