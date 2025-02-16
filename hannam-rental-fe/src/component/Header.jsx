import './Header.css';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="Header">
            <div className='left'>
                <img className = "logo" src={logo} alt="" />
            </div>
            <div className='right'>
                <div className="headerlogIn">LogIn</div>
                <div className="menu">메뉴</div>
            </div>
        </header>
    )
}

export default Header;