import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import {
  Button,
  Form,
  FormContainer,
  Input,
  InputLabel,
  Tab,
  TabSignIn,
  TabSignUp,
} from "./styles";

/**
  '/' 경로에 로그인 / 회원가입 기능 개발
  1. 이메일과 비밀번호의 유효성 검사 기능 구현
    이메일 조건: @ 포함
    비밀번호 조건: 8자 이상
    입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화
    테스트용 이메일, 패스워드 이용
 */

const Auth = () => {
  const navigate = useNavigate();
  // 로그인/회원가입 탭 이동 상태
  const [select, setSelect] = useState("signin");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState(false);

  // 이메일 유효성 검사
  const emailValidation = (el) => {
    let email = el.target.value;
    setUserInfo({ ...userInfo, email: email });
    if (
      [...email].includes("@") &&
      email !== "" &&
      userInfo.password.length >= 8
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  // 비밀번호 유효성 검사
  const pwValidation = (el) => {
    let pw = el.target.value;
    setUserInfo({ ...userInfo, password: pw });
    if (
      pw.length >= 8 &&
      [...userInfo.email].includes("@") &&
      userInfo.email !== ""
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    if (select === "signin") {
      return axios
        .post(
          `https://pre-onboarding-selection-task.shop/auth/${select}`,
          userInfo
        )
        .then((res) => {
          const { access_token } = res.data;
          localStorage.setItem("token", access_token);
          navigate("/todo");
        });
    } else {
      return axios.post(
        `https://pre-onboarding-selection-task.shop/auth/${select}`,
        userInfo
      );
    }
  };

  return (
    <Container>
      <Tab>
        <TabSignIn
          onClick={() => {
            setSelect("signin");
          }}
          select={select}
        >
          로그인
        </TabSignIn>
        <TabSignUp
          onClick={() => {
            setSelect("signup");
          }}
          select={select}
        >
          회원가입
        </TabSignUp>
      </Tab>
      <FormContainer>
        <Form onSubmit={sumbitHandler}>
          <InputLabel htmlFor="email">이메일</InputLabel>
          <Input id="email" type="email" onChange={emailValidation}></Input>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <Input id="password" type="password" onChange={pwValidation}></Input>
          <Button disabled={!validation} check={validation}>
            {select === "signin" ? "로그인" : "회원가입"}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Auth;
