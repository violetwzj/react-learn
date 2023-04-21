import React from "react";
 
const CartContext = React.createContext({
    // 要注意，在这里也可以不指定，因为他是从别的地方获取的，写出格式只是便于阅读
    items: [],
    totalAmount : 0,
    totalPrice : 0,
    cartDispatch: ()=>{}
})
export default CartContext;