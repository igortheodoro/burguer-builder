import Styled from "styled-components";

const StyledControlsDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 245, 245, 0.5);
`;

const StyledDiv = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const StyledButton = Styled.button`
  padding: 15px;
  margin: 5px;
  width: 50px;
  border: none;
  background-color: #e9c46a;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  transition: all .5s;

  :focus, :hover{
    cursor: pointer;
    outline: none;
    background-color: #e76f51;
  }
`;

const StyledH1 = Styled.h1`
  font-size: 25px;
  text-align: right;
  width: 150px;
  color: #264653;
  margin-right: 10px;
`;

const StyledParagraph = Styled.p`
  color: #e76f51;
  font-size: 18px;
  font-weight: 600;
  padding: 8px;
`

export {
  StyledControlsDiv,
  StyledDiv,
  StyledButton,
  StyledH1,
  StyledParagraph
}