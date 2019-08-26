import React from 'react';
import Donjon from './destination/donjon/Donjon';
import Salle from './destination/salle/Salle';
import Mort from './destination/resultat/Mort';
import Resultat from './destination/resultat/Resultat';
import Utils from '../utils/Utils';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentState: "Donjon",
            game: this.props.game,
        }
        console.log("game : construct");
    }
    move = (destination,game) =>{
        this.setState({
            currentState: destination,
            game: game,
        });
    }
    route(){
        console.log(this.state.currentState);
        console.log(this.props.game.hero.getSante()-this.props.game.hero.damage);
        if(this.props.game.hero.getSante()-this.props.game.hero.damage<1){
            return <Mort move={this.move} game={this.state.game}/>
        }else if(this.state.currentState === "Donjon"){
            return <Donjon move={this.move} game={this.state.game}/>;
        }else if (this.state.currentState === "Salle"){
            return <Salle move={this.move} game={this.state.game}/>;
        }else if (this.state.currentState === "Resultat"){
            return <Resultat move={this.move} game={this.state.game}/>
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