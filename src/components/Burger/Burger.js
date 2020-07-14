import React from 'react'
import BurgerIngredients from './BurgerIngredient/BurgerIngredient'
import Styled from 'styled-components'

const BurgerDiv = Styled.div`
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

const burger = (props) => {

  // O método abaixo pega cada key do objeto
  // key são as propriedades, exemplo meat: 2. Meat é a key
  // Depois usa o método Array que basicamente cria um array
  // com um tamanho que é definido dentro do atributo
  // Como foi passado o objeto ingredients na posição da sua key
  // logo, será criado um array com o número que está dentro dessa key
  // Array[ingredients[meat]] == 1
  // A partir disso o segundo map irá fazer um for loop de acordo com 
  // o array criado acima, criando os componentes 

  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, index) => {
        return <BurgerIngredients key={ingKey + index} 
                type={ingKey} />
      })
    });

    const hasIngredients = () => {
      let counter = 0

      for(var i = 0; i < transformedIngredients.length; i++){
        // If have no ingredients 
        if(transformedIngredients[i].length === 0){
          counter++
        }
      }

      let isBurgerEmpty = counter === transformedIngredients.length
      
      if(isBurgerEmpty){
        transformedIngredients = <p>Add some ingredients</p>
      }
    }

  return (
    <BurgerDiv>
      <BurgerIngredients type='bread-top'/>

        {hasIngredients()}
        {transformedIngredients}

      <BurgerIngredients type='bread-bottom'/>
    </BurgerDiv>
  )
}

export default burger