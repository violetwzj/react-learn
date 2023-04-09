import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'


export default function Confirm(props) {
  return (
    <Backdrop className={classes.ConfirmOuter}>
        <div className={classes.Confirm}>
            <p className={classes.ConfirmText}>{props.ConfirmText}</p>
            <div>
                <button 
                onClick={(e)=>{
                    props.onCancel(e)
                }}
                className={classes.Cancel}>取消</button>
                <button 
                onClick={(e)=>{
                    props.onOK(e)
                }}
                className={classes.OK}>确认</button>
            </div>
        </div>
    </Backdrop>
  )
}
