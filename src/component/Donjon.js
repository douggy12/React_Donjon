import React from 'react';
import Etage from './Etage';


class Donjon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donjon: props.donjon
        }
        this.descendre();

    }

    ouvrirPorte = (index) => {
        let donjon = this.state.donjon;
        donjon.etage[donjon.etage.length -1].isOpen = true;
        this.setState({
            donjon: donjon
        })
    }

    descendre(){
        let donjon = this.state.donjon;
        donjon.etage.push({portes: Array(4).fill({isOpen: false})});
    
        this.setState({
            donjon : donjon
        })
    }

    render() {
        return (
            <div className='donjon'>
                <h2>Etage -{this.state.donjon.etage.length}</h2>
                <Etage 
                    move={this.props.move} 
                    openDoor = {this.ouvrirPorte} 
                    donjon ={this.props.donjon}
                />
                <button onClick={() => this.descendre()}>Descendre</button>
            </div>
        );
    }
}
export default Donjon;