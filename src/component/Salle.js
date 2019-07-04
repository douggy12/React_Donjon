import React from 'react';


class Salle extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "salle">
                <div>Combattre le Monstre</div>
                <button onClick={()=>{this.props.move("Donjon",this.props.donjon)}}>Gagné</button>
                <button>Perdu</button>
            </div>
        );
    }
}
export default Salle;