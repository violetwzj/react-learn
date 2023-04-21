import React, {useEffect, useState} from 'react';
import StudentList from "./components/StudentList";
import './App.css';


const App = () => {
    const [stuData, setStuData] = useState([]);
    // 添加一个state记录数据是否正在重新加载
    const [loading, setLoading] = useState(false);
    // 创建一个state记录错误信息
    const [error, setError] = useState(null)
    /*
    *   将写死的数据替换为从接口 http://localhost:1337/api/students
    *       中加载的数据
    *
    *   组件初始化时需要向服务器发送请求来加载数据
    * */
    useEffect(() => {
        setLoading(true)
        // 在effect中加载数据
        // fetch() 用来向服务器发送请求加载数据，是Ajax的升级版
        // 它需要两个参数：1.请求地址 2.请求信息
        fetch('http://localhost:1337/api/students')
            .then((res) => {
                // response表示响应信息
                // console.log(res);

                return res.json();// 该方法可以将响应的json直接转换为js对象
            })
            .then(data => {
                // 将加载到的数据设置到state中
                setStuData(data.data);
                setLoading(false)
            })
            .catch((e) => {
                // catch中的回调函数，用来统一处理错误
                // catch执行说明上面的代码出错
                setLoading(false)
                // 设置错误状态
                setError(e)
            });

    }, []);

    return (
        <div className="app">
            <button>加载数据</button>
            {(!loading && !error) && <StudentList stus={stuData}/>}
            {loading && <p>数据正在加载中。。。</p>}
            {error && <p>数据加载异常</p>}
        </div>
    );
};

export default App;
