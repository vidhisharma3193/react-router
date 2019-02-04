import React, { Component } from 'react';
import { DragonCard } from './DragonCard';
import { Link} from 'react-router-dom'

export class Home extends Component {
    render() {
        // console.log("Home Component")
        console.log(this.props)
     
        return (
            <div style={{float:'left',width:'100%', backgroundColor:'#00ffd8', textAlign:'center'}}>
                <h1>Home</h1>
                {this.props.dragons.map( dragon => (
                    <Link to="/war">
                    <DragonCard dragon={dragon} selectDragon={this.props.selectDragon}/>
                    </Link>
                ))}
            </div>
        );
    }
}