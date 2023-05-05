import React from 'react'
import { Link , NavLink} from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>主页</Link>
        </li>
        <li>
          <Link to='/about'>关于</Link>
        </li>
        <li>
          <NavLink 
          to='/student/2'
          style={({isActive})=>{
            return isActive? {backgroundColor:'yellow'} : null
          }}>
            student message
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
