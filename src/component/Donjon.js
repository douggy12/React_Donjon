import React from 'react';
import Utils from '../utils/Utils';
import Bat from '../asset/bat.png';
import Skull from '../asset/skull.png';
import Hourglass from '../asset/hourglass.png';

class Donjon extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            donjon: props.donjon,
            hero: props.hero
        }
        console.log("donjon:construct");
    }

    ouvrirPorte(index) {
        let donjon = this.state.donjon;
        Utils.last(Utils.last(donjon.etages).couloirs).portes[index] = { status: "open" };
        this.setState({
            donjon: donjon
        })
    }

    explorer() {
        let donjon = this.state.donjon;
        Utils.last(donjon.etages).couloirs.push(donjon.getEmptyHall(4));
        this.setState({ donjon: donjon });

    }

    rentrer(index) {
        let donjon = this.props.donjon;
        Utils.last(Utils.last(donjon.etages).couloirs).portes[index].status = "fight"
        this.props.move("Salle", this.props.donjon, this.props.hero);
    }

    descendre() {
        let donjon = this.state.donjon;
        if (donjon.etages.length === donjon.boss.etage) {
            donjon.isExplored = true;
            donjon.etages.push({ couloirs: [{ portes: [{ status: "boss" }] }] });

        } else {
            donjon.etages.push({
                couloirs: [donjon.getEmptyHall(4)]
            });
        }
        this.setState({
            donjon: donjon
        })
    }

    renderEtage(portes) {
        const etage = portes.map((porte, index) => {
            if (porte.status === "open") {

                return <div key={index} className="door open" onClick={() => {
                    this.rentrer(index);
                }}><img src={Bat} alt='bat' className="door-monster" /></div>
            } else if (porte.status === "close") {

                return (
                    <div key={index} className="door close" onClick={() => {
                        this.ouvrirPorte(index);
                    }
                    }>

                    </div>
                );
            } else if (porte.status === "defeat") {
                return (
                    <div key={index} className="door open">
                        <img src={Skull} alt='skull' className="door-skull" />
                    </div>
                );
            } else if (porte.status === "boss") {
                return (
                    <button key={index} className="door boss" onClick={() => {
                        this.rentrer(index);
                    }}>Boss</button>
                );
            } else {
                return null;
            }
        });
        return etage;
    }

    render() {
        const temps = (Utils.last(this.state.donjon.etages).couloirs.length - 1) * 4;
        const etageIsExplored = temps === 24;
        const etage = this.renderEtage(Utils.last(Utils.last(this.state.donjon.etages).couloirs).portes)


        return (
            <div className='donjon'>
                <div className="topbar">
                    <div className="box">
                        <h2>Etage -{this.state.donjon.etages.length}</h2>
                    </div>
                    <div className="box">
                        <div className="temps">
                            <img className="hourglass" src={Hourglass} alt="hourglass" /> {temps}/24
                        </div>
                    </div>
                </div>
                <div className="etage">
                    {etage}
                </div>

                {!etageIsExplored && !this.state.donjon.isExplored && <button onClick={() => this.explorer()}>Explorer</button>}

                {!this.state.donjon.isExplored && <button onClick={() => this.descendre()}>Descendre</button>}
            </div>
        );
    }
}
export default Donjon;