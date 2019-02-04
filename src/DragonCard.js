import React, { Component } from 'react'
import { dragons }  from './data'

export class DragonCard extends Component {
    allDragons = () => {
        this.props.history.push(`/dragons`)
    }

    render(){
        console.log(this.props, this.state)
        
        let displayDragon;
        
        if(this.props.dragon){
            displayDragon = this.props.dragon
        }
        else{
            displayDragon = dragons.find( dragon => (dragon.id==this.props.match.params.id) )
        }
       
        return (
            
            <div onClick={()=> this.props.selectDragon(displayDragon.id)}>
             <h1> Dragon's card</h1>
                <h3>{displayDragon.name}</h3>
                <p>{displayDragon.description}</p>
                <img style={{ width: '100px'}} src={displayDragon.image} alt=""></img>
                <h3 onClick={this.allDragons}>Show all Dragons</h3>
            </div>
        )
    }

}