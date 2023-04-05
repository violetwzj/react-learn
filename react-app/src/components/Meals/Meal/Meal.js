import React from 'react'
import classes from './Meal.module.css'
import Counter from '../../UI/Counter/Counter'
const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src='/img/meals/1.png' alt=""/>
            </div>
            <div>
                <h2 className={classes.Title}>汉堡包</h2>
                <p className={classes.Desc}>百分百纯牛肉，搭配爽脆黄瓜，洋葱粒，番茄酱，经典滋味</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>12</span>
                    <Counter amount={0}/>
                </div>
            </div>
        </div>
    )
}

export default Meal;