import React, {useState} from "react";
import Meals from "./components/Meals/Meals";
const App = () => {
    const [showBorder, setShowBorder] = useState(false);
    const clickHander = ()=>{
        setShowBorder(true)
    }


    return (
        <div>
            <Meals/>
        </div>
    )
}
export default App