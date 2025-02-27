import './Membership.css';
import Header from'./Header';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate();
  return (
  <div>
    <Header />
  <div className="page">
    <div className="titleWrap">
      로그인
    </div>

    <div className="content">
      <div className="inputTitle">아이디</div>
      <div className="inputWrap">
        <input 
          placeholder="아이디를 입력하세요."
          className="input"/>
      </div>

      <div
        className="inputTitle">비밀번호</div>
      <div className="inputWrap">
        <input
          placeholder="비밀번호를 입력하세요."
          className="input"/>
      </div>
      <div className="errorMessege">
        영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
      </div>

      <div className='bottomButton'>
        <Button
        className="bottomLogIn"
        onClick={()=> nav(`/college`)}
        text={"로그인"}
        />

        <Button
        className="bottomSignup"
        onClick={()=> nav(`/signup`)}
        text={"회원가입"}
        />

      </div>
    </div>

  </div>
  </div>
  );
}

export default Login