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
`;

const StyledCheckButton = Styled.button`
  background-color: #264653;
  outline: none;
  cursor: pointer;
  border: transparent;
  color: #fff;
  font-family: inherit;
  font-size: 1.05rem;
  padding: 10px;
  box-shadow: 2px 2px 10px 2px rgba(38, 70, 83, 0.5);
  border-radius: 8px;
  margin-top: 15px;
  width: 120px;
  margin-left: 85px;

  transition: all .3s;
}

 :hover, :active {
  background-color: #1a7857;
}

 :disabled {
  background-color: #C7C6C6;
  cursor: not-allowed;
  border: 1px solid #ccc;
  color: #888888;
}

 :not(:disabled) {
  animation: enable 0.3s linear;
}

@keyframes enable {
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
`;

export { StyledDiv, StyledPrice, StyledCheckButton };
