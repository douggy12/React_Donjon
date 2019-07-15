import React from 'react';
import Hourglass from '../asset/hourglass.png';

class Temps extends React.Component {
    render(){
        return(
            <div className="temps">
                <img className="hourglass" src={Hourglass} alt="hourglass" /> {this.props.temps}/24
            </div>
        );
    }
}
export default Temps;
