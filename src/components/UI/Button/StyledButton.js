import Styled from 'styled-components'

const StyledButton = Styled.button`
  padding: 10px;
  outline: none;
  border: none;
  color: #ffffff;
  margin-right: 15px;
  font-size: 1.05rem;
  border-radius: 5px;
  background-color: ${props => props.btnSuccess ? '#1A7857' : '#E76F51'};

  :hover{
    cursor: pointer;
  }
`

export default StyledButton