import React, { Component } from 'react';
import { dragons }  from './data' // in home & war
import { War } from './War';
import { Home } from './Home';
import { Dragons } from './Dragons';
import { DragonCard } from './DragonCard'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


let updateElementInArray = (array, id, values) => {
  return array.map( element => {
    if(element.id === id){
      return { ...element, ...values }
    } else {
      return element
    }
  })
}

class App extends Component {

  constructor(){
    super()
    this.state = {
      dragons: dragons,
      selected: null
    }
  }

  sendDragonToWar = (id) => {
    this.setState({
      dragons: updateElementInArray(this.state.dragons, id, { atWar: true })
    })
  }

  sendDragonHome = (id) => {
    this.setState({
      dragons: updateElementInArray(this.state.dragons, id, { atWar: false })
    })
  }

  changeSelected = (selected) => {
    this.setState({
     selected: selected
    })
  }

  render() {
    // console.log(BrowserRouter)

    let dragonsAtHome = this.state.dragons.filter( dragon => !dragon.atWar )
    let dragonsAtWar = this.state.dragons.filter( dragon => dragon.atWar )
  
    let display;


    switch (this.state.selected){
      case "Home":
        display  = <Home dragons={dragonsAtHome} selectDragon={this.sendDragonToWar} />
        break;
      case "War":
        display  = <War  dragons={dragonsAtWar} selectDragon={this.sendDragonHome}/>
        break;
      default:
        display = null
        break;
    }
    return (
      
        <BrowserRouter>

        <div>

        <Switch>
        
        <Route exact={true} path="/dragons" component={Dragons}/> {/* excat={true} swap lines */}
        <Route path="/dragons/:id" component={DragonCard}/>
       

        <Route path="/home" render={(routeProps) => (<Home {...routeProps} dragons={dragonsAtHome} selectDragon={this.sendDragonToWar} />)} />

        <Route path="/war" render={() => (<War dragons={dragonsAtWar} selectDragon={this.sendDragonHome}/>)}/>

        </Switch>
        </div>
        
        </BrowserRouter>
   

      

    )
  }
}

export default App;