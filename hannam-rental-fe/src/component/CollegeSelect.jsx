import Header from "./Header";
import "./CollegeSelect.css"
import hannamUniversity from "../assets/hannamUniversity.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const CollegeSelect = () => {
    const nav = useNavigate();

    const handleClick = (text) => {
        nav("/rental", { state: { text: text } });
    };
    
    return(
    <div className="CollegeSelect">
        <Header/>
        <img className="hannamUniversity" src={hannamUniversity} alt="" />
        
        <Button
        onClick={()=> handleClick("공과대학")}
        className= {"college9"}
        text = {"공과대학"}
        />

        <Button
        onClick={()=> handleClick("스마트융합대학")}
        className= {"college6"}
        text = {"스마트융합대학"}
        />

        <Button
        onClick={()=> handleClick("경상대학")}
        className= {"college5"}
        text = {"경상대학"}
        />

        <Button
        onClick={()=> handleClick("사회과학대학")}
        className= {"college56"}
        text = {"사회과학대학"}
        />

        <Button
        onClick={()=> handleClick("문과대학")}
        className= {"college4"}
        text = {"문과대학"}
        />

        <Button
        onClick={()=> handleClick("조형예술대학")}
        className= {"college7"}
        text = {"조형예술대학"}
        />

        <Button
        onClick={()=> handleClick("사범대학학")}
        className= {"college3"}
        text = {"사범대학"}
        />

        <Button
        onClick={()=> handleClick("린튼클로벌스쿨")}
        className= {"college40"}
        text = {"린튼글로벌스쿨"}
        />

        <Button
        onClick={()=> handleClick("아트&디자인테크놀로지대학")}
        className= {"college11"}
        text = {"아트&디자인테크놀로지대학"}
        />

        <Button
        onClick={()=> handleClick("생명나노과학대학")}
        className= {"college72"}
        text = {"생명나노과학대학"}
        />
    </div>
    
    )
}   

export default CollegeSelect;