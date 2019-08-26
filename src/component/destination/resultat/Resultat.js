import React from 'react';
import Malus from '../../global/Malus';
import Utils from '../../../utils/Utils';
import Item from '../../global/Item';
import PowerUp from './PowerUp';


class Resultat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            powerToChoose: false,
        }
    }

    retry(){
        this.props.game.donjon.temps += 2;        
        this.props.move("Salle",this.props.game);
    }

    flee(){
        Utils.last(Utils.last(this.props.game.donjon.etages).couloirs).portes.find(porte => porte.status === 'fight').status = 'open';
        this.props.game.donjon.temps += 1;        
        this.props.move("Donjon",this.props.game);
    }
    quit(){
        Utils.last(Utils.last(this.props.game.donjon.etages).couloirs).portes.find(porte => porte.status === 'fight').status = 'defeat';
        this.props.move("Donjon",this.props.game);
    }
    equiper = (objet) =>{
        this.props.game.hero.equip(objet);
        this.quit();
    }
    ajouterPouvoir = (pouvoir) => {
        this.props.game.hero.addPower(pouvoir);
    }
        
    renderGagne(){
        let lastLvl = this.props.game.hero.lvl;
        this.props.game.hero.earnXp(this.props.game.monstre.xp);
        const actualLvl = this.props.game.hero.lvl;
        let powerUp=[];
        while(lastLvl<actualLvl){
            lastLvl++;
            powerUp.push(lastLvl);
        }
        
        const earnedObject = this.props.game.monstre.dropObject();
        return(
            <div>
                <div className='box'>
                    <h2>Vous avez écrasé {this.props.game.monstre.nom}</h2>
                    <div>vous avez gagné {this.props.game.monstre.xp} XP</div>
                    <PowerUp 
                        powerUp = {powerUp} 
                        earnedObject = {earnedObject}
                        equiper = {this.equiper}
                        ajouterPouvoir = {this.ajouterPouvoir}
                    />                    
                </div>
                
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