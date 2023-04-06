import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'
export default function FilterMeals() {
  return (
    <div className={classes.FilterMeals}>
       <div className={classes.InputOuter}>
          <input className={classes.SeachInput} type='text' placeholder={'请输入关键字'} />
          <FontAwesomeIcon className={classes.SeachIcon} icon={faSearch}/>
       </div>
    </div>
  )
}
