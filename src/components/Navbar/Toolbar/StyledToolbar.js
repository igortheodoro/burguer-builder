import Styled from 'styled-components'

const StyledNav = Styled.div`
  background-color: #f4a261;
  color: #264653;
  font-weight: 600;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const StyledDiv = Styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 499px){
    display: none;
  }
`;

const StyledBtnToggle = Styled.button`
  padding: 8px;
  border: transparent;
  background-color: transparent;
  font-size: 1.8rem;
  outline: none;
  color: inherit;
  transition: all .2s;
  animation: ${props => props.isOpened ? 'rotate .2s linear' : 'rotate(0deg)'};
  transform: ${props => props.isOpened ? 'rotate(90deg)' : 'rotate(0deg)'};

  :hover{
    cursor: pointer;
  }


  @keyframes rotate {
    0% {
      transform: rotate(15deg);
    }
    15% {
      transform: rotate(30deg);
    }
    30% {
      transform: rotate(45deg);
    }
    45% {
      transform: rotate(60deg);
    }
    60% {
      transform: rotate(75deg);
    }
    75% {
      transform: rotate(90deg);
    }
    90% {
      transform: rotate(95deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  @media (min-width: 499px){
    display: none;
  }
`


export {StyledNav, StyledDiv, StyledBtnToggle};