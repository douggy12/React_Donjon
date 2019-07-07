import React from 'react';
import Donjon from './Donjon';
import Salle from './Salle';
import Mort from './Mort';
import Utils from '../utils/Utils';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentState: "Donjon",
            donjon: this.props.donjon,
        }
        console.log("game : construct");
    }
    move = (destination,donjon) =>{
        this.setState({
            currentState: destination,
            donjon: donjon
        });
    }
    route(){
        if(this.state.currentState === "Donjon"){
            return <Donjon move={this.move} donjon={this.state.donjon}/>;
        }else if (this.state.currentState === "Salle"){
            return <Salle move={this.move} donjon={this.state.donjon}/>;
        }else if (this.state.currentState === "Mort"){
            return <Mort move={this.move} donjon={this.state.donjon}/>
        }
    }
    render() {
        return(
            <div className="game">
                {this.route()}
            </div>
        );
    }
}
export default Game;