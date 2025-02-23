import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Main from './component/Main'
import Mypage from './component/Mypage'
import SignUp from './component/Signup'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Main/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />
        <Route path = '/mypage' element = {<Mypage/>} />
      </Routes>
    </div>
  )
}

export default App
