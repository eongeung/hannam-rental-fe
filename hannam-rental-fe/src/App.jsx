import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Main from './component/Main'
import Mypage from './component/Mypage'
import SignUp from './component/Signup'
import RentalPage from './component/RentalPage'
import CollegeSelect from './component/CollegeSelect'
import Sidebar from './component/Sidebar'
import RentalApplication from './component/RentalApplication'
import { useReducer } from 'react'

const mockData = [
  {
    RentalId: 1,
    createdDate : new Date("2025-03-01").getTime(),
    productId: 1,
    rentalSpace: "스마트융합대학",
  },
  {
    RentalId: 2,
    createdDate : new Date("2025-03-02").getTime(),
    productId: 1,
    rentalSpace: "공과대학",
  },
  {
    RentalId: 3,
    createdDate : new Date("2025-03-03").getTime(),
    productId: 2,
    rentalSpace: "경상대학",
  },
]

function reducer(state, action){
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Main/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />
        <Route path = '/mypage' element = {<Mypage/>} />
        <Route path = '/rental/:id' element = {<RentalPage/>} />
        <Route path = '/college' element = {<CollegeSelect/>} />
        <Route path = '/sidebar' element = {<Sidebar/>} />
        <Route path = '/application' element = {<RentalApplication/>} />
      </Routes>
    </div>
  )
}

export default App
