import hannamUniversity from "../assets/hannamUniversity.jpg";
import './Main.css';

const Main = () => {
    return (
        <div className="Main">
            <div className="right">
                <h1 className="title">HANNAM<br/>RENTAL<br/></h1>
                <h5 className="mainlogIn">로그인하기</h5>

            </div>
            <img className = "map" src={hannamUniversity} alt="" />
        </div>
    )
}

export default Main;