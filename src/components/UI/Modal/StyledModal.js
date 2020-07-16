import Styled from "styled-components";

const StyledModalDiv = Styled.div`
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(-100vh)'};
    opacity: ${props => props.show ? '1' : '0'};
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    box-shadow: 1px 1px 5px 1px #ababab;
    padding: 25px;
    border-radius: 8px;
    left: 15%;
    top: 10%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;

    @media (min-width: 600px) {
      width: 500px;
      left: calc(50% - 250px);
    }
`;

export default StyledModalDiv