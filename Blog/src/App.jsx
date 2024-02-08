import React, { Fragment } from 'react'
import {BrowserRouter,Route,Routes} from  'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import SignIn from './Components/Sigin/SignIn'
import SignUp from './Components/Sigin/SignUp';
import Dashboard from './Components/Dashboard/Dashboard'
import Project from './Components/Project/Project'
import Header from './Components/Header/Header'

const App = () => {
  return (
 <Fragment>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/sign-in' element={<SignIn/>} />
  <Route path='/sign-up' element={<SignUp/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='/project' element={<Project/>} />
</Routes>
</BrowserRouter>
 </Fragment>
  )
}

export default App