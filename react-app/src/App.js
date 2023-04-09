import React, {useState} from "react";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/CartContext";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";
import Confirm from "./components/UI/Confirm/Confirm";
// import Backdrop from "./components/UI/Backdrop/Backdrop";
//创建一组食物数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png'
    }
];

const App = () => {
    //创建一个state用来存储食物列表
    const [mealsData, setMealsData] = useState(MEALS_DATA)
    // 创建一个state用来存储食物列表数据
    // 1.商品[];
    // 2.商品总数（total amount)
    // 3.商品总价（totalPrice)
    const [carData, setCarData] = useState(
        {
            items : [],
            totalAmount : 0,
            totalPrice : 0
        }
    )

    //创建一个过滤meals的函数
    const filterHandler = (keyword) => {
        const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1)
        setMealsData(newMealsData);
    }



    //向购物车添加商品
    const addItem = (meal) =>{
        //meal是要添加到购物车的商品
        //对购物车进行复制
        //可以用扩展运算符实现对购物车数据的浅复制
        const newCart = {...carData};

        //将meal添加到购物车中
        //但是要判断这个商品是否已经在购物车里了，如果已经存在，那么可以直接加数量，而不需要items里添加
        if(newCart.items.indexOf(meal)===-1){
            //将meal添加到购物车里
            newCart.items.push(meal);
            //修改商品的数量
            meal.amount = 1;
        }else{
            meal.amount += 1;
        }
        //不管什么情况，购物车的总数一定是恒定+1；
        newCart.totalAmount ++;
        newCart.totalPrice += meal.price;
        // 重新设置购物车
        setCarData(newCart)
    }
    const removeItem = (meal) => {
        //对购物车进行复制
        const newCart = {...carData};
        meal.amount --;
        //检查商品数量是否归零；
        if (meal.amount === 0){
            newCart.items.splice(newCart.items.indexOf(meal),1);

        }
        //修改商品总数和总金额
        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price
        setCarData(newCart)
    }

    //清空购物车
    const clearCart = ()=>{
        const newCart = {...carData};
        newCart.items.forEach(item=>delete item.amount)
        newCart.items = [];
        newCart.totalAmount = 0;
        newCart.totalPrice = 0;
        setCarData(newCart)
    }

    return (
        <CartContext.Provider value={{...carData,addItem,removeItem,clearCart}}>
            {/* <Confirm/> */}
            <div>
                <FilterMeals onFilter={filterHandler}/>
                <Meals 
                mealsData={mealsData}
                />
                <Cart/>
                {/* <Backdrop/> */}
            </div>
        </CartContext.Provider>
    )
}
export default App