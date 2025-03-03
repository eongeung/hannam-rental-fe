import React, { useState } from "react";
import axios from "../api/axiosfile.js"; // 설정된 axios 인스턴스 사용
import "./Membership.css";
import Header from "./Header";

const SignUp = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // 회원가입 요청 함수
  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    try {
      const response = await axios.post("/users/register", {
        studentId,
        password,
        name,
        phoneNumber,
      }, {
        headers: {
          // 회원가입 요청은 인증 불필요하므로 헤더에 토큰을 추가하지 않음
        }
      });

      console.log("회원가입 성공:", response.data);
      alert("회원가입이 완료되었습니다! 로그인 페이지로 이동해주세요.");

      // 회원가입 성공 후 로그인 페이지로 이동
      window.location.href = "/login";

    } catch (error) {
      console.error("회원가입 오류:", error.response?.data || error.message);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <Header />
      <div className="page">
        <div className="titleWrap">회원가입</div>

        <form className="content" onSubmit={handleSubmit}>
          <div className="underlineInput">
            <label htmlFor="studentId">아이디(학번)</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>

          <div className="underlineInput">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="underlineInput">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="underlineInput">
            <label htmlFor="phoneNumber">전화번호</label>
            <input
              type="text"
              placeholder="-을 제외한 전화번호를 입력하세요."
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="bottomButton">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;