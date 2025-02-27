import Header from "./Header";
import "./CollegeSelect.css"
import hannamUniversity from "../assets/hannamUniversity.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const CollegeSelect = () => {
    const nav = useNavigate();
    return(
    <div className="CollegeSelect">
        <Header/>
        <img className="hannamUniversity" src={hannamUniversity} alt="" />
        
        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college9"}
        text = {"공과대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college6"}
        text = {"스마트융합대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college5"}
        text = {"경상대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college56"}
        text = {"사회과학대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college4"}
        text = {"문과대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college7"}
        text = {"조형예술대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college3"}
        text = {"사범대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college40"}
        text = {"린튼글로벌스쿨"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college11"}
        text = {"아트&디자인테크놀로지대학"}
        />

        <Button
        onClick={()=> nav(`/rental`)}
        className= {"college72"}
        text = {"생명나노과학대학"}
        />




    </div>
    
    )
}   

export default CollegeSelect;