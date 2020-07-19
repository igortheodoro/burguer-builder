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
`;

const StyledItem = Styled.a`
  margin-left: 15px;
  padding: 5px;
  display: flex;
  text-decoration: none;
  border-bottom: ${props => props.isActive ? '2px solid #264653' : 'none'};

  :hover{
    border-bottom: 2px solid #264653;
  }

  :visited {
    color: inherit;
  }
`;

const StyledLogo = Styled.img`
  width: 55px;
  height: 100%;
  margin-right: 15px;
`

export {StyledNav, StyledDiv, StyledItem, StyledLogo}