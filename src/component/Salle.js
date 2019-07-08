import React from 'react';
import Utils from '../utils/Utils';


class Salle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donjon: props.donjon,
            hero: props.hero
        }
    }

    gagner() {
        Utils.last(Utils.last(this.props.donjon.etages).couloirs).portes.find(porte => porte.status === 'fight').status = 'defeat';
        return this.props.move("Donjon", this.props.donjon);
    }

    renderSante() {
        let barreSante = [];
        for (let i = 0; i < this.state.hero.sante; i++) {
            barreSante.push(<div>❤</div>);
        }
        return barreSante;
    }

    renderStockDes(nbDes) {
        let des = [];
        for (let i = 0; i < nbDes; i++) {
            des.push(<div className="de"></div>);
        }
        return des;
    }

    render() {

        return (
            <div className="salle">

                <div>Combattre le Monstre</div>
                <div className="combat">
                    <div className="hero">
                        <div className="topbar">
                            <div className="nom">{this.state.hero.name}</div>
                            <div className="sante">{this.renderSante()}</div>
                        </div>
                        <div className="stats">
                            <div className = "force">
                                <div className="titre">Force</div>
                                <div className = "stock-des">{this.renderStockDes(this.state.hero.force)}</div>
                            </div>
                            <div className = "agilite">
                                <div className="titre">Agilite</div>
                                <div className = "stock-des">{this.renderStockDes(this.state.hero.agilite)}</div>
                            </div>
                            <div className = "magie">
                                <div className="titre">Magie</div>
                                <div className = "stock-des">{this.renderStockDes(this.state.hero.magie)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="monstre">
                        Monstre
                    </div>
                </div>
                <button onClick={() => this.gagner()}>Gagné</button>
                <button onClick={() => this.props.move("Mort", this.props.donjon)}>Perdu</button>
            </div>
        );
    }
}
export default Salle;