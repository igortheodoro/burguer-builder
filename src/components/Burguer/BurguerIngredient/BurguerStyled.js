import Styled from "styled-components";

const BreadBottom = Styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#F08E4A, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;

const BreadTop = Styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;

const Seeds1 = Styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: #ffffff;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9b687;

  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ffffff;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9b687;
  }

  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ffffff;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9b687;
  }
`;

const Seeds2 = Styled.div`
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: #ffffff;
    left: 64%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(10deg);
    box-shadow: inset -3px 0 #c9b687;

  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ffffff;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9b687;
  }
`;

const Meat = Styled.div`
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`;

const Cheese = Styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`

const Salad = Styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`

const Bacon = Styled.div`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 2% auto;
`

export default {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon
} 
