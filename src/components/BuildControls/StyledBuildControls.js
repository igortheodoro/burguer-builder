import Styled from "styled-components";

const StyledDiv = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 10px 0;
  background-color: rgba(245, 245, 245, 0.3);
`;

const StyledPrice = Styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #264653;
  margin-right: 10px;
`

export {StyledDiv, StyledPrice}