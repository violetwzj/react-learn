import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartDetails.module.css'
import CartContext from '../../../store/CartContext';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';

export default function CartDetails(){

  const ctx = useContext(CartContext);
  //设置state控制确认框的显示
  const [showConfirm, setShowConfirm] = useState(false);
  //添加函数显示确认窗口
  const showConfirmHandler = ()=>{
    setShowConfirm(true)
  }


  //取消函数
  const cancelHandler = (e) =>{
    e.stopPropagation();
    setShowConfirm(false);
  }
  const OKHandler = () => {
    //清空购物车
    ctx.clearCart();
  }

  return (
    <Backdrop onClick={cancelHandler}>
        {showConfirm && <Confirm 
          onCancel={cancelHandler}
          onOK={OKHandler}
          ConfirmText={'确认取消吗'}/>}
        <div 
        className={classes.CartDetails}
        onClick={e=>e.stopPropagation()}
        >
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
                <div
                    onClick={showConfirmHandler} 
                    className={classes.Clear}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span>清空购物车</span>
                </div>
            </header>
            <div className={classes.MealList}>
                {ctx.items.map(item => 
                    <Meal noDesc key={item.id} meal={item}/>
                )}
            </div>
        </div>
    </Backdrop>
  )
}
