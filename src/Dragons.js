import React, { Component } from 'react';
import { dragons }  from './data' // in home & war

export class Dragons extends Component {
  state = {
      dragons: dragons
    }

  render() {
    return (
        <div style={{textAlign: "center"}}>
            <h2> All Dragons</h2>

            {this.state.dragons.map( dragon => (   
                    <div>
                       <h3>{dragon.name}</h3>
                       <p>{dragon.description}</p>
                       <img style={{ width: '100px'}} src={dragon.image} alt=""></img>
                    </div>
            ))}

        </div>
    )
  }
}

