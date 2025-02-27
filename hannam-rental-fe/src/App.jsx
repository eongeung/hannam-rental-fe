import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Main from './component/Main'
import Mypage from './component/Mypage'
import SignUp from './component/Signup'
import RentalPage from './component/RentalPage'
import CollegeSelect from './component/CollegeSelect'
import Sidebar from './component/Sidebar'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Main/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />
        <Route path = '/mypage' element = {<Mypage/>} />
        <Route path = '/rental' element = {<RentalPage/>} />
        <Route path = '/college' element = {<CollegeSelect/>} />
        <Route path = '/sidebar' element = {<Sidebar/>} />
      </Routes>
    </div>
  )
}

export default App
