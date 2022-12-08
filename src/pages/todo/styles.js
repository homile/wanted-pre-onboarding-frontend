import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #dddddd;
  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20rem;
  border: 2px solid #dddddd;
  width: 100%;
  border-top: 0px;
  overflow: auto;
`;

export const UList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  line-height: 2rem;
  border-bottom: 1px solid #dddddd;
`;

export const ListInput = styled.input`
  width: 16rem;
  height: 1.5rem;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const ListLabel = styled.label`
  width: 16rem;
  padding: 0 4px;
`;

export const ListButton = styled.button`
  background: #339af0;
  margin: 0 2px;
  border: 1px solid #74c0fc;
  color: white;
  cursor: pointer;

  &:hover {
    background: #74c0fc;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border: 2px solid #dddddd;
  border-top: 0px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

export const Input = styled.input`
  height: 2rem;
  width: 80%;
  font-size: 1rem;
  padding: 0 1rem;
`;

export const SubmitButton = styled.button`
  height: 2.23rem;
  width: 20%;
  padding: 0 1rem;
  background: #339af0;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #74c0fc;
  }
`;
