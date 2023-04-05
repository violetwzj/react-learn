import React, {useState} from "react";
import classes from './App.module.css'
const App = () => {
    const [showBorder, setShowBorder] = useState(false);
    const clickHander = ()=>{
        setShowBorder(true)
    }


    return (
        <div>
            <p className={`${classes.p1} ${showBorder? classes.Border:''}`}>violet</p>
            <button onClick={clickHander}>click</button>
        </div>
    )
}
export default App