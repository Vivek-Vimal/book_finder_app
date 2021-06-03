import React from 'react'
import './App.css'
import Home from './component/Home'
import Welcomne from './component/Welcome'
import {Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
     <Switch>
       <Route exact path="/" component={Welcomne}/>
       <Route exact path ="/Home" component={Home} />
     </Switch>
    </>
  )
}

export default App

