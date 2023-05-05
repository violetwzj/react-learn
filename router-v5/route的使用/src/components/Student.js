import React from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'


const StuData = [
  {
    id : 1,
    name : 'violet'
  },
  {
    id : 2,
    name : 'wzj'
  },
  {
    id : 3,
    name : 'zkl'
  },
  {
    id : 4,
    name : 'xiaozhong'
  }
]
export default function Student(props) {
  // 除了props获取三个对象外，可以通过钩子函数来获取
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  // console.log(props.match.params);
  const stu = StuData.find(item => item.id === +params.id)
  // const stu = StuData.find(item => item.id ===1)
  console.log(stu)
  return (
    <div>
      {stu.id} --- {stu.name}
    </div>
  )
}
