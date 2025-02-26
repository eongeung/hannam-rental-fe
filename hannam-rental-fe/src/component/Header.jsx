import './Header.css';
import logo from "../assets/logo.png";
import Button from './Button';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate();
    return (
        <header className="Header">
            <div className='left'>
                <Button
                onClick={() => nav(`/`)}
                text = {<img src = {logo}/>}
                className = {"logo"}/>
            </div>
            
            <div className='right'>
                <Button
                onClick={() => nav(`/login`)}
                text = {"LogIn"}
                className = {"headerLogIn"}/>

                <div className='menu'>메뉴</div>
            </div>
        </header>
    )
}

export default Header;