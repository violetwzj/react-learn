import React from 'react'
import Meal from './Meal/Meal';
import classes from './Meals.module.css'
const Meals = (props) => {
    return (
        // 将滚动条设置给Meals
        <div className={classes.Meals}>
            {props.mealsData.map((item) => 
            <Meal key={item.id} meal={item}/>)}
        </div>
    )
}

export default Meals;