import React from 'react';
import Malus from './Malus';
import Utils from '../utils/Utils';


class Resultat extends React.Component {

    retry(){
        this.props.game.donjon.temps += 2;        
        this.props.move("Salle",this.props.game);
    }

    flee(){
        Utils.last(Utils.last(this.props.game.donjon.etages).couloirs).portes.find(porte => porte.status === 'fight').status = 'open';
        this.props.game.donjon.temps += 1;        
        this.props.move("Donjon",this.props.game);
    }

    renderPerdu() {
        return (
            <div>
                <div className='box'>
                    <h2>Dommage {this.props.game.monstre.nom} vous a terrassé !</h2>
                </div>

                <div>
                    <button onClick={()=>this.retry()}>Retenter une attaque ! <Malus malus={{ temps: 2 }} /></button>
                    <button onClick={()=>this.flee()}>Fuir ! <Malus malus={{ temps: 1 }} /></button>
                </div>
            </div>
        );
    }
    render() {

        return (
            <div className='resultat'>
                {!this.props.game.gagne && this.renderPerdu()}
            </div>
        );
    }
}
export default Resultat;