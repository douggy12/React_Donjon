import React from 'react';
import Utils from '../utils/Utils';

class Donjon extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            donjon: props.donjon
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
        Utils.last(donjon.etages).couloirs.push(Utils.getEmptyHall(4));
        this.setState({ donjon: donjon });

    }

    rentrer(index) {
        let donjon = this.props.donjon;
        Utils.last(Utils.last(donjon.etages).couloirs).portes[index].status = "fight"
        this.props.move("Salle", this.props.donjon);
    }

    descendre() {
        let donjon = this.state.donjon;
        donjon.etages.push({
            couloirs: [Utils.getEmptyHall(4)]
        });

        this.setState({
            donjon: donjon
        })
    }

    renderEtage(portes) {
        const etage = portes.map((porte, index) => {
            if (porte.status === "open") {

                return <button key={index} className="opened-door" onClick={() => {
                    this.rentrer(index);
                }}>Monstre</button>
            } else if (porte.status === "close") {

                return (
                    <button key={index} className="door" onClick={() => {
                        this.ouvrirPorte(index);
                    }
                    }>

                    </button>
                );
            } else if (porte.status === "defeat") {
                return (
                    <div key={index} className="defeat">
                        X
                </div>
                );
            } else {
                return null;
            }
        });
        return etage;
    }

    render() {
        const temps = (Utils.last(this.props.donjon.etages).couloirs.length - 1) * 4;
        const isExplored = temps === 24;
        const etage = this.renderEtage(Utils.last(Utils.last(this.props.donjon.etages).couloirs).portes)


        return (
            <div className='donjon'>
                <h2>Etage -{this.state.donjon.etages.length}</h2>
                <div className="temps">
                    {temps}/24
                </div>
                <div className="etage">
                    {etage}
                </div>

                {!isExplored && <button onClick={() => this.explorer()}>Explorer</button>}

                <button onClick={() => this.descendre()}>Descendre</button>
            </div>
        );
    }
}
export default Donjon;