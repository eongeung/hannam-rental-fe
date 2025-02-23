const SignUp = () => {
  return (
    <div className="page">
      <div className="titleWrap">회원가입</div>

      <div className="content">
        <div className="underlineInput">
          <label>아이디(학번)</label>
          <input type="text" />
        </div>

        <div className="underlineInput">
          <label>비밀번호</label>
          <input type="password" />
        </div>

        <div className="underlineInput">
          <label>이름</label>
          <input type="text" />
        </div>

        <div className="underlineInput">
          <label>전화번호</label>
          <input type="text" placeholder="-을 제외한 전화번호를 입력하세요." />
        </div>

        <button className="bottomButton">회원가입</button>
      </div>
    </div>
  );
};

export default SignUp