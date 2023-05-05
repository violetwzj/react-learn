import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu';
import Student from './components/Student';


export default function App() {
  return (
    <div>
      <Menu/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    </div>
  )
}
