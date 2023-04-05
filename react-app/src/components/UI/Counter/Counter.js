import React from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
// 引入fontawesome
// -安装依赖
// npm i --save @fortawesome/fontawesome-svg-core
// # Free icons styles
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest


//计数器组件
const Counter= (props) => {
    return (
        <div className={classes.Counter}>

            {
                (props.amount && props.amount!==0) ? (
                <>
                <button className={classes.Sub}><FontAwesomeIcon icon={faMinus}/></button>
                <span className={classes.count}>{props.amount}</span>
                </>
                ) : null
            }




            
          
            <button className={classes.Add}>
                <FontAwesomeIcon icon={faPlus}/>
                </button>
        </div>
    )
}

export default Counter;