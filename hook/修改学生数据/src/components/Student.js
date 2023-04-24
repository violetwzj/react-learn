import React, { useCallback, useContext, useState } from 'react';
import StuContext from '../store/StuContext';
import StudentForm from '../../src/components/StudentForm';

const Student = (props) => {
    // {stu:{name, age, gender, address}} = props
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEdit, setIsEdit] = useState(false)
    const ctx = useContext(StuContext);
    const delStu = useCallback(async ()=>{
        try{
            setLoading(true);
            setError(null);
            const res = await fetch(`http://localhost:1337/api/students/${props.stu.id}`,{
                method:'delete'
            });
            // 判断是否成功
            if(!res.ok){
                throw new Error('删除失败')
            }
            // 被删除的学生
            // const data = await res.json() 
            // 修改成功后，需要触发列表刷新
            ctx.fetchData();
        }catch(e){
            setError(e)
        }finally{
            setLoading(false)
        }
    },[])
    const deleteHandler = () => {
        // 删除学生
        delStu()
    }

    const cancelEdit = () => {
        setIsEdit(false)
    }
    return (
        <>
        {!isEdit && 
         <tr>
                <td>{props.stu.attributes.name}</td>
                <td>{props.stu.attributes.gender}</td>
                <td>{props.stu.attributes.age}</td>
                <td>{props.stu.attributes.address}</td>
                <td>
                    <button onClick={deleteHandler}>删除</button>
                    <button onClick={()=>setIsEdit(true)}>修改</button>
                </td>
            </tr>
        }
        {isEdit && <StudentForm stu={props.stu} onCancel={cancelEdit}/>}
            {loading && <tr><td colSpan={5}>数据正在删除</td></tr>}
            {error && <tr><td colSpan={5}>删除失败</td></tr> }
        </>
    );
};

export default Student;
