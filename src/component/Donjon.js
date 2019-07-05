import React from 'react';
import Etage from './Etage';
import Utils from '../utils/Utils';

class Donjon extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            donjon: props.donjon
        } 

    }
    

    ouvrirPorte = (index) => {
        let donjon = this.state.donjon;
        Utils.last(Utils.last(donjon.etages).couloirs).portes[index] = {status : "open"};
        this.setState({
            donjon: donjon
        })
    }

    explorer = () => {
        let donjon = this.state.donjon;
        Utils.last(donjon.etages).couloirs.push({portes: Array(4).fill({status:"close"})});
        this.setState({donjon: donjon});
        
    }

    descendre(){
        let donjon = this.state.donjon;
        donjon.etages.push({
            couloirs:[{portes: Array(4).fill({status:"close"})}]
        });
    
        this.setState({
            donjon : donjon
        })
    }

    render() {
        return (
            <div className='donjon'>
                <h2>Etage -{this.state.donjon.etages.length}</h2>
                <Etage 
                    move={this.props.move}
                    explorer={this.explorer}
                    openDoor = {this.ouvrirPorte} 
                    donjon ={this.props.donjon}
                />
                <button onClick={() => this.descendre()}>Descendre</button>
            </div>
        );
    }
}
export default Donjon;