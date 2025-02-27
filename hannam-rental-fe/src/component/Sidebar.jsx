import user from "../assets/user.jpg"
import Button from "./Button";
import Login from "./Login";
import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="sideBar">
            <div className='profile'>
                <img className ="userImage" src={user}/>
                <h4 className='name'>이름</h4>
                <Button
                className={"logOut"}
                text={"로그아웃"}
                /> 
            </div>
            
            <ul className="menuOption">
                <option value="Login">로그인</option>
                <option value="mypage">마이페이지</option>
            </ul>
        </div>
    )
}

export default Sidebar;