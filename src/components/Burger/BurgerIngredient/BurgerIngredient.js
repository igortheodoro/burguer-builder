import React from 'react'
import StyledIngredients from './BurgerStyled'
import PropTypes from 'prop-types'

const burguerIngredients = (props) => {
  let ingredient = null

  switch(props.type){
    case ('bread-bottom'):
      ingredient = <StyledIngredients.BreadBottom />
      break;

    case ('bread-top'):
      ingredient = (
        <StyledIngredients.BreadTop>
          <StyledIngredients.Seeds1 />
          <StyledIngredients.Seeds2 />
        </StyledIngredients.BreadTop>
      )
      break;

    case ('meat'):
      ingredient = <StyledIngredients.Meat />
      break;

    case ('salad'):
      ingredient = <StyledIngredients.Salad />
      break;

    case ('cheese'):
      ingredient = <StyledIngredients.Cheese />
      break;

    case ('bacon'):
      ingredient = <StyledIngredients.Bacon />
      break;

    default:
      ingredient = null;
  }

  return ingredient;
}

burguerIngredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default burguerIngredients