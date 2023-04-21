import React, { useContext, useEffect, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from '../../store/CartContext';
import CartDetails from './CartDetails/CartDetails';
import { faTruckField } from '@fortawesome/free-solid-svg-icons';
import Checkout from './Checkout/Checkout';
export default function Cart() {
  const ctx = useContext(CartContext);

  //添加一个state来设置详情是否显示
  const [showDetails, setshowDetails] = useState(false);
  //在组件每次重新渲染的时候，检查一下商品的总数量，如果数量是0,则修改showDetails为false
  //组件的每次渲染，组件的函数体就会执行
  // 以下会触发重新渲染太多次，会报错
  // if(ctx.totalAmount===0){
  //   //购物车已经被清空
  //   setshowDetails(false);
  // }
  useEffect(()=>{
    if(ctx.totalAmount===0){
      // 购物车已经被清空
      setshowDetails(false)
      setShowCheckout(false)
    }
    // 空数组的话只会在组件初始化时触发一次
  },[ctx])
  //添加一个函数用来控制是否显示详情页函数
  const toggleDetailsHandler = () =>{
    if(ctx.totalAmount===0){
      setshowDetails(false)
      return
    }
    setshowDetails(prevState=> !prevState);
  }
  //添加一个state用来设置是否显示结账界面
  const [showCheckout, setShowCheckout] = useState(false);

  const showCheckoutHandler = () => {
    if(ctx.totalAmount===0) return 
    setShowCheckout(true)
  }
  
  const hideCheckoutHandler = () =>{
    setShowCheckout(false)
  }

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}
      {/* 引入购物车的详情 */}
      {showDetails &&  <CartDetails/> }
        <div className={classes.Icon}>
            <img src={iconImg}/>
            {
              ctx.totalAmount===0? null:<span className={classes.TotalAmount}>{ctx.totalAmount}</span>
            }   
        </div>
        {
          ctx.totalAmount===0? <p className={classes.noMeal}>未选购标签</p>: <p className={classes.Price}>{ctx.totalPrice}</p>
        }
        <button 
        onClick={showCheckoutHandler}
        className={`${classes.Button} ${ctx.totalAmount===0?classes.Disabled:''}`}>去结算</button>
    </div>
  )
}
