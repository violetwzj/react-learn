import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'
export default function FilterMeals(props) {
  const [keyword, setKeyword] = useState('');

  useEffect(()=>{
    // 降低数据过滤的次数，提高用户体验
    // 防抖
    const timer = setTimeout(()=>{
      props.onFilter(keyword);
    }, 1000)
    // 可以return出一个函数，作为清理函数，会在下次effect执行前调用
    // 可以在这个函数中，做一些工作清除上次effect执行所带来的影响
    return ()=>{
      clearTimeout(timer)
    }
  }, [keyword])

  //获取输入的值
  const inputChangeHandler = (e) =>{
      setKeyword(e.target.value.trim());
      // props.onFilter(keyword)
  }

  return (
    <div className={classes.FilterMeals}>
       <div className={classes.InputOuter}>
          <input 
          value={keyword}
          onChange={inputChangeHandler}
          className={classes.SeachInput} 
          type='text' 
          placeholder={'请输入关键字'} />
          <FontAwesomeIcon className={classes.SeachIcon} icon={faSearch}/>
       </div>
    </div>
  )
}
