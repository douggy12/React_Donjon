import React from 'react';
import Utils from '../utils/Utils';


class Salle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donjon: props.donjon,
            hero: props.hero,
            stockDe: this.getStockDe(props.hero.stats),
            monstre: {
                nom: "Rat affamé",
                stats: [
                    {type:"force",nb: 2,isFill:false},
                    {type:"force",nb:3,isFill:false},
                    {type:"agilite",nb:2,isFill:false}
                ]
            },
            selectedDice: {type:null,index:null},
        }
    }

    getStockDe(stats){
        return {
            force: Array(stats.force).fill({value:null,isDispo:true}),
            agilite: Array(stats.agilite).fill({value:null,isDispo:true}),
            magie: Array(stats.magie).fill({value:null,isDispo:true}),
        }
    }

    gagner() {
        Utils.last(Utils.last(this.props.donjon.etages).couloirs).portes.find(porte => porte.status === 'fight').status = 'defeat';
        return this.props.move("Donjon", this.props.donjon);
    }

    renderSante() {
        let barreSante = [];
        for (let i = 0; i < this.state.hero.sante; i++) {
            barreSante.push(<div key={i}>❤</div>);
        }
        return barreSante;
    }

    isSelectedDice(type,index){
        if(type===this.state.selectedDice.type && index===this.state.selectedDice.index){
            return true;
        }
        return false;
    }
    renderStockDes(listDe, type) {
        return listDe.map((de,index)=><div key={index} className={"de " + (this.isSelectedDice(type,index)?"focus":"")} onClick={()=>this.setState({selectedDice: {type:type,index:index}})}></div>);
    }

    renderMonstrestats(stat,index){
        return(
            <div key={index} className={stat.type + " de" + (stat.isFill?" fill":" empty")}></div>
        );
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
                    </div>
                    <div className="monstre">
                        <div className="topbar">
                            <div className="nom">{this.state.monstre.nom}</div>
                        </div>
                        <div className="stats">
                            {this.state.monstre.stats.map((stat,index)=> this.renderMonstrestats(stat,index))}                      
                        </div>

                    </div>
                </div>
                <button onClick={() => this.gagner()}>Gagné</button>
                <button onClick={() => this.props.move("Mort", this.props.donjon)}>Perdu</button>
            </div>
        );
    }
}
export default Salle;