import React from 'react';
import Utils from '../utils/Utils';


class Salle extends React.Component {
    
    gagner() {
        Utils.last(Utils.last(this.props.donjon.etages).couloirs).portes.find(porte => porte.status === 'fight').status = 'defeat';
        return this.props.move("Donjon",this.props.donjon);
    }

    render() {
       
        return (
            <div className = "salle">
                <div>Combattre le Monstre</div>
                <button onClick={()=>this.gagner()}>Gagné</button>
                <button onClick={()=> this.props.move("Mort",this.props.donjon)}>Perdu</button>
            </div>
        );
    }
}
export default Salle;