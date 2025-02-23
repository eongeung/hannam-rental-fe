import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Main from './component/Main'
import Mypage from './component/Mypage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Main/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/mypage' element = {<Mypage/>} />
      </Routes>
    </div>
  )
}

export default App
