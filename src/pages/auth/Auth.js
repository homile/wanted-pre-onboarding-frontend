import React, { useState } from "react";

/**
  '/' 경로에 로그인 / 회원가입 기능 개발
  1. 이메일과 비밀번호의 유효성 검사 기능 구현
    이메일 조건: @ 포함
    비밀번호 조건: 8자 이상
    입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화
    테스트용 이메일, 패스워드 이용
 */

const Auth = () => {
  // 로그인/회원가입 탭 이동 상태
  const [select, setSelect] = useState("SignIn");

  return (
    <div>
      <div>
        <span
          onClick={() => {
            setSelect("SignIn");
          }}
        >
          로그인
        </span>
        <span
          onClick={() => {
            setSelect("SignUp");
          }}
        >
          회원가입
        </span>
      </div>
      <form>
        <label htmlFor="email"></label>
        <input id="email"></input>
        <label htmlFor="password"></label>
        <input id="password"></input>
        {select === "SignIn" ? (
          <button>로그인</button>
        ) : (
          <button>회원가입</button>
        )}
      </form>
    </div>
  );
};

export default Auth;
