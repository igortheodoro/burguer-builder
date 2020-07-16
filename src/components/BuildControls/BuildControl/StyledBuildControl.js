import Styled from "styled-components";

const StyledH1 = Styled.h1`
  font-size: 20px;
  text-align: left;
  width: 85px;
  color: #264653;
`;

const StyledButton = Styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  background-color: #e9c46a;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
  transition: all .5s;

  :focus, :hover{
    cursor: pointer;
    background-color: #e76f51;
  }

  :disabled{
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
`;

const StyledDiv = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;


export { StyledH1, StyledButton, StyledDiv };
