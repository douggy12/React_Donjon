import React from 'react';
import style from './powercard.module.css';

class PowerCard extends React.Component{
    render(){
        return(
            <div className={style.card}>
                <div className={style.icon}>
                    <img src={this.props.power.icon} alt="icone de pouvoir"/>
                </div>
                {this.props.power.sacrifier !== undefined && <div className={style.verb}>Sacrifier {this.props.power.sacrifier.nb} dé(s) {this.props.power.sacrifier.type}</div>}
                {this.props.power.ajouter !== undefined && <div className={style.verb}>Ajouter {this.props.power.sacrifier.nb} sur {this.props.power.sacrifier.on} de vos dés de type {this.props.power.sacrifier.type}</div>}
            </div>
        );
    }
}
export default PowerCard;