import React from 'react';

class Mort extends React.Component {

    constructor(props) {
        super(props);
        this.state = { restart: false }
    }
    recommencer() {
        console.log("restart requis");
        const donjon = this.props.donjon;
        donjon.reset();
        this.props.move("Donjon",donjon,this.props.hero);
    }
    render() {
            return (
                <div className="mort">
                    <div className="box">
                    Vous êtes mort dans d'atroces souffrances !
                    </div>
                <button onClick={() => this.recommencer()}>Recommencer !</button>
                </div>
            );        
    }
}
export default Mort;