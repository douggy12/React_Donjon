import React from 'react';
import Utils from '../utils/Utils.js'

class Etage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            etage: this.props.donjon.etages.length            
        }
    }
       
    rentrer(index){
        this.props.move("Salle");
    }

    componentWillReceiveProps(props) { 
 
        if (props.etage !== this.state.etage) {           
            this.setState({ etage: props.donjon.etages.length, temps: 0, isExplored: false }); 
        } 
        console.log('etage : propsreceived');
    } 

    render() {
        
        const temps = (Utils.last(this.props.donjon.etages).couloirs.length-1) * 4;
        const isExplored = temps === 24;
        const portes = Utils.last(Utils.last(this.props.donjon.etages).couloirs).portes.map((porte, index) => {

            if (porte.isOpen) {
                
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
                    {!isExplored && <button onClick={() => this.props.explorer()}>Explorer</button>}
                </div>
            </div>

        );
    }
}
export default Etage;