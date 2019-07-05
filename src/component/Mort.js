import React from 'react';
import Game from './Game';
//import Utils from '../utils/Utils';

class Mort extends React.Component {

    constructor(props) {
        super(props);
        this.state = { restart: false }
    }
    recommencer() {
        this.setState({ restart: true });
    }

    render() {
        if (this.state.restart) {
            return (
                <Game />
            );
        } else {
            return (
                <div className="mort">
                    Vous êtes mort dans d'atroces souffrances !
                <button onClick={() => this.recommencer()}>Recommencer !</button>
                </div>
            );
        }
    }
}
export default Mort;