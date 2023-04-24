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
    useEffect(() =>{
        try{
            const fetchData = async () => {
                setLoading(true);
                setError(null)
                const res = await fetch(" http://localhost:1337/api/students")
                console.log(res)
                // 判断请求是否加载成功
                if(res.ok){
                    const data =await res.json();
                    setStuData(data.data);
                    setLoading(false)
                }else{
                    throw new Error('数据加载失败')
                }
            } 
        }catch(e){
            setError(e);
        }finally{
            setLoading(false)
        }
        fetchData();
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
