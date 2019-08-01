import React from 'react';
import Malus from './Malus';
import Utils from '../utils/Utils';
import Item from './Item';


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
    equiper(objet){
        console.log(objet);
        this.props.game.hero.equip(objet);
        this.props.move("Donjon",this.props.game);


    }
    renderButin(object){
        return(
            <div className='butin'>
                <h3>Vous avez trouvé {object.item.nom}</h3>
                <Item item={object} />
                <button onClick={()=>this.equiper(object.item)}>Equiper</button>
                <button onClick={()=> this.props.move("Donjon",this.props.game)}>Jeter</button>
            </div>
           
        );
    }
    renderGagne(){
        this.props.game.hero.earnXp(this.props.game.monstre.xp);      
        Utils.last(Utils.last(this.props.game.donjon.etages).couloirs).portes.find(porte => porte.status === 'fight').status = 'defeat';
        const earnedObject = this.props.game.monstre.dropObject();
        console.log(earnedObject);
        return(
            <div>
                <div className='box'>
                    <h2>Vous avez écrasé {this.props.game.monstre.nom}</h2>
                    <div>vous avez gagné {this.props.game.monstre.xp} XP</div>
                    {earnedObject !== null && this.renderButin(earnedObject)}
                    {earnedObject === null &&<h3>Vous n'avez rien trouvé dans la salle</h3>}
                    
                </div>
                <button onClick={()=> this.props.move("Donjon",this.props.game)}>OK</button>
            </div>
        );
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
                {this.props.game.gagne && this.renderGagne()}
            </div>
        );
    }
}
export default Resultat;