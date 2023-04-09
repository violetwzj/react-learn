import React from 'react';
import classes from './CheckoutItem.module.css';
import Counter from '../../../UI/Counter/Counter'
export default function CheckoutItem(props) {
  return (
    <div className={classes.CheckoutItem}>
        <div className={classes.MealImg}>
            <img src={props.meal.img} alt=''/>
        </div>
        <div className={classes.Desc}>
            <h2 className={classes.Title}>汉堡包</h2>
            <div className={classes.PriceOuter}>
                <Counter meal ={props.meal}/>
                <div className={classes.Price}>{props.meal.price * props.meal.amount}</div>
            </div>
        </div>
    </div>
  )
}
