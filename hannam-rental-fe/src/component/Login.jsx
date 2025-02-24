import './Login.css';
import Header from'./Header';

const Login = () => {
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

      <div style={{display:"flex", gap: "10px"}}>
        <button className="bottomButton">로그인</button>
        <button className="bottomButton">회원가입</button>
      </div>
    </div>

  </div>
  </div>
  );
}

export default Login