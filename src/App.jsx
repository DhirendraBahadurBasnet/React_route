import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Post from './Components/Post'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Logout from './Components/Logout'
import { Navigate } from 'react-router-dom'
import Products from './Components/Products'
import Jeans from './Components/Jeans'
import Shirtts from './Components/Shirtts'
function App() {
  // let isLogged = false
  let isLogged = true
  let data = {
    'st': 'User not logged in'
  }
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element=<Home/> />
      <Route path='/about' element=<About/> />
      <Route path='/contact' element=<Contact/> />
      <Route path='/login' element=<Login/> />
      <Route path='/logout' element=<Logout/> />
      <Route path='/dashboard' element= {isLogged ? <Dashboard/> : <Navigate to='/login' replace state={data} />} />
      <Route path='/post/:category/:id' element=<Post/> />
      <Route path='/*' element={ <h1> Error 404 page not found</h1> } />
      <Route path='/product' element=<Products/> >
        <Route index element=<Shirtts/>/>
        <Route path='shirt' element=<Shirtts/>/>
        <Route path='jean' element=<Jeans/>/>
      </Route>
    </Routes>
  
    </>
  )
}

export default App
