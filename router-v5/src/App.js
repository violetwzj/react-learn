import React,{useState} from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu';
import MyForm from './components/MyForm';
import Login from './components/Login';

export default function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      <Menu/>
    <Route exact path='/' component={Home}/>
    <Route path='/about'>
      <About/>
    </Route>

    <Route path={'/login'}>
      <Login/>
    </Route>

    <Route path='/form'>
      {isLogin? <MyForm/> : <Redirect to={'/login'}><Login/></Redirect>}
    </Route>
    </div>
  )
}
