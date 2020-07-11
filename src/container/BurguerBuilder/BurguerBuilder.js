import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliary'
import Burguer from '../../components/Burguer/Burguer'
import BuildControls from '../../components/BuildControls/BuildControls'

class BurguerBuilder extends Component{
  constructor(props){
    super(props)

    this.state = {
      ingredients: {
        meat: 1,
        cheese: 2,
        salad: 3,
        bacon: 1
      },
      purchased: false,
      totalPrice: 0
    }
  }

  state = {}

  render(){
    return (
      <Aux>
        <Burguer  ingredients={this.state.ingredients}/>
        <BuildControls />
      </Aux>
    )
  }
}

export default BurguerBuilder