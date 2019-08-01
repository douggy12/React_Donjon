import React from 'react';
import Utils from '../utils/Utils';
import De from './De';
import DeCible from './DeCible';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Temps from './Temps';
import Hero from './Hero';

class Salle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donjon: props.game.donjon,
            hero: props.game.hero,
            stockDe: this.getStockDe(props.game.hero.stats),
            monstre: props.game.donjon.getFightingChamber().monstre,
            selectedDice: { type: null, index: null },
            isDicesRolled: false,
            
        };
    }
    rollDices() {
        let stockDeForce = this.state.stockDe.force.map((type) => {
            return { value: Utils.getRandomInt(6), isDispo: true };
        });
        let stockDeAgilite = this.state.stockDe.agilite.map((type) => {
            return { value: Utils.getRandomInt(6), isDispo: true };
        });
        let stockDeMagie = this.state.stockDe.magie.map((type) => {
            return { value: Utils.getRandomInt(6), isDispo: true };
        });
        this.setState({ stockDe: { force: stockDeForce, agilite: stockDeAgilite, magie: stockDeMagie } });
    }

    getStockDe(stats) {
        return {
            force: Array(stats.force).fill({ value: null, isDispo: true }),
            agilite: Array(stats.agilite).fill({ value: null, isDispo: true }),
            magie: Array(stats.magie).fill({ value: null, isDispo: true }),
        }
    }

    isGagne() {
        let gagne = true;
        this.state.monstre.stats.forEach((stat) => {
            if (stat.value > 0) {
                gagne = false;
            }
        })

        return gagne;
    }

    gagner() {
        
        return this.props.move("Resultat", {donjon:this.state.donjon, hero:this.state.hero,monstre:this.state.monstre, gagne:true});
    }
    perdre() {

        if (this.state.hero.sante > 0) {
            
            let donjon = this.state.donjon;
            this.calculateDamage();
            this.props.move("Resultat", {donjon:this.state.donjon, hero:this.state.hero,monstre:this.state.monstre, gagne:false});
        }
        if (this.state.hero.sante < 1) {
            
            this.props.move("Mort",{donjon:this.state.donjon, hero:this.state.hero});
        }

    }

    calculateDamage() {
        let hero = this.state.hero;
        let donjon = this.state.donjon;
        this.state.monstre.stats.forEach((stat) => {
            if (stat.value > 0) {
                if (stat.damages.length > 0) {
                    hero.damage += stat.damages[0];
                    donjon.temps += stat.damages[1];
                }

            }
        });
        this.setState({ hero: hero, donjon: donjon });
    }

    renderStockDes(listDe, type) {
        return listDe.map((de, index) => <De
            key={index}
            onClick={() => this.setState({ selectedDice: { type: type, index: index } })}
            de={{ stat: de, type: type, index: index }}
            selectedDice={this.state.selectedDice}
        />);
    }

    isRequiredDone(monstre) {
        const requArray = monstre.stats.filter(stat => stat.required);
        let result = requArray.every((stat) => {
            if (stat.value > 0) {
                return false;
            }
            return true;
        })
        return result;
    }
    onDrop = (item, target) => {

        let stockDe = this.state.stockDe;

        let monstre = this.state.monstre;
        if (item.stat.value >= target.stat.value) {
            monstre.stats[target.index].value = 0;
        } else if (target.stat.multi) {
            let result = target.stat.value - item.stat.value;
            monstre.stats[target.index].value = result < 0 ? 0 : result;
        }
        if (this.isRequiredDone(monstre)) {
            monstre.requiredDone = true;
        }
        stockDe[item.type].splice([item.id], 1);

        this.setState({
            stockDe: stockDe,
            monstre: monstre
        })
    }

    renderMonstrestats(stat, index) {
        return (
            <DeCible
                cible={{ stat: stat, index: index }}
                requiredDone={this.state.monstre.requiredDone}
                droppedItem={this.state.droppedItem}
                onDrop={this.onDrop}
                key={index} />
        );
    }

    render() {

        return (
            <div className="salle">
                <div className="topbar">
                    <div className="box">Combattre le Monstre</div>
                    <div className="box">
                        <Temps temps={this.state.donjon.temps} />
                    </div>
                </div>
                <DndProvider backend={HTML5Backend}>
                    <div className="combat">
                        <div className="hero">
                            <Hero hero={this.state.hero} />
                            <div className="action">
                                <div className="stats">
                                    <div className="force">
                                        <div className="titre">Force</div>
                                        <div className="stock-des">{this.renderStockDes(this.state.stockDe.force, "force")}</div>
                                    </div>
                                    <div className="agilite">
                                        <div className="titre">Agilite</div>
                                        <div className="stock-des">{this.renderStockDes(this.state.stockDe.agilite, "agilite")}</div>
                                    </div>
                                    <div className="magie">
                                        <div className="titre">Magie</div>
                                        <div className="stock-des">{this.renderStockDes(this.state.stockDe.magie, "magie")}</div>
                                    </div>
                                </div>
                                <div className='roll'>
                                    <button onClick={() => this.rollDices()}>Roll The Dice !</button>
                                </div>
                            </div>
                        </div>
                        <div className="monstre">
                            <div className="topbar">
                                <div className="nom">{this.state.monstre.nom}</div>
                            </div>
                            <div className="stats">
                                {this.state.monstre.stats.map((stat, index) => this.renderMonstrestats(stat, index))}
                            </div>

                        </div>
                    </div>
                </DndProvider>

                <div>
                    {this.isGagne() && <button onClick={() => this.gagner()}>Gagné</button>}
                    <button onClick={() => this.perdre()}>Perdu</button>
                </div>

            </div>
        );
    }
}
export default Salle;