import styled from "styled-components";

export const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2px solid #dddddd;
`;

export const TabSignIn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 2.5rem;
  cursor: pointer;

  background: ${(props) => props.select === "signin" && "#155FE9"};
  color: ${(props) => props.select === "signin" && "#FFFFFF"};
`;

export const TabSignUp = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 2.5rem;
  cursor: pointer;

  background: ${(props) => props.select === "signup" && "#155FE9"};
  color: ${(props) => props.select === "signup" && "#FFFFFF"};
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #dddddd;
  border-top: 0px;
  width: 100%;
  height: 15rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
`;

export const InputLabel = styled.label`
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  height: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  padding: 0 1rem;
`;

export const Button = styled.button`
  height: 2rem;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  background: ${(props) => (props.check ? "#155FE9" : "#74c0fc")};
  cursor: ${(props) => (props.check ? "pointer" : `not-allowed`)};
  margin-top: 0.8rem;
`;
