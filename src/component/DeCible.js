import React from 'react';

class DeCible extends React.Component {
    isPossible() {
        if (this.props.selectedDice.type === this.props.cible.stat.type && !this.props.cible.stat.isFill) {
            return true;
        }
        return false;
    }
    render(){
        return(
             <div
                className={this.props.cible.stat.type + " de" + (this.props.cible.stat.isFill ? " fill" : " empty") + (this.isPossible() ? " possible" : "")}
                onClick={this.props.onclick}
            ></div>
        );
    }
}
export default DeCible;