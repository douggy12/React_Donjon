import React from 'react';
import Etage from './Etage';


class Donjon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etage: 0,
        }
    }

    descendre(){
        this.setState({
            etage : this.state.etage -1
        })
    }

    render() {
        const etage = this.state.etage;
        return (
            <div className='games'>
                <h2>Etage {etage}</h2>
                <Etage etage={etage} />
                <button onClick={() => this.descendre()}>Descendre</button>
            </div>
        );
    }
}
export default Donjon;