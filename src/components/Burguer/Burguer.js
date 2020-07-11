import React from 'react'
import BurguerIngredients from './BurguerIngredient/BurguerIngredient'
import Styled from 'styled-components'

const BurguerDiv = Styled.div`
  width: 100%;
  margin: 0 auto;
  height: 250px;
  overflow-y: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  ::-webkit-scrollbar {
    width: 10px;
  }
 
  ::-webkit-scrollbar-track {
      border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 6px rgba(199, 111, 12, 0.5); 
  }

  @media (min-width: 300px) and (min-height: 400px){
    width: 300px;
    height: 335px;
  }

  @media (min-width: 400px) and (min-height: 400px){
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px){
    width: 450px;
    height: 450px;
  }

  @media (min-width: 1000px) and (min-height: 700px){
    width: 700px;
    height: 600px;
  }
`

const burguer = (props) => {

  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, index) => {
        return <BurguerIngredients key={ingKey + index} 
                type={ingKey} />
      })
    });

  return (
    <BurguerDiv>
      <BurguerIngredients type='bread-top'/>

        {transformedIngredients}

      <BurguerIngredients type='bread-bottom'/>
    </BurguerDiv>
  )
}

export default burguer