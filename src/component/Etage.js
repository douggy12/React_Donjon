import React from 'react';

class Etage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            temps: 0,
            isExplored: false,
            etage: props.etage,
            portes: this.portes
        }
        

    }
    componentWillReceiveProps(props) {

        if (props.etage !== this.state.etage) {
            this.portes = Array(4).fill({
                isOpen: false,
            });
            
            this.setState({ etage: props.etage, temps: 0, isExplored: false });
        }
    }
    explorer() {
        this.portes = Array(4).fill({
            isOpen: false,
        });
        if (this.state.temps < 20) {
            this.setState({
                temps: this.state.temps + 4
            })
        } else {
            this.setState({
                temps: this.state.temps + 4,
                isExplored: true
            })
        }
    }
    ouvrirPorte(key) {
        this.portes[key] = {isOpen: true};
        // console.log("porte : " + key + "ouverte");
        // console.log(this.portes);
        this.setState({
            portes: this.portes
        })
    }
    rentrer(index){
        this.props.move("Salle");
    }

    render() {

        const temps = this.state.temps;
        const isExplored = this.state.isExplored;
        const portes = this.portes.map((value, index) => {

            if (this.portes[index].isOpen) {
                
                return <button  key={index} className = "opened-door" onClick={() => {
                    this.rentrer(index);
                    }}>Monstre</button>
            } else {
                
                return (
                    <button key={index} className="door" onClick={() => {
                        this.props.openDoor(index);
                    }
                    }>

                    </button>
                );
            }
        })
        return (
            <div>
                <div className="temp">
                    <div>{temps}/24</div>
                </div>
                <div className="etage">
                    {portes}
                </div>
                <div className="explorer">
                    {!isExplored && <button onClick={() => this.explorer()}>Explorer</button>}
                </div>
            </div>

        );
    }
}
export default Etage;