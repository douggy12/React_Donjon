import React from 'react';
import Heart from './Heart';

class HealthBar extends React.Component{

    render(){
        let healthBar = [];
        let cpt=0;
        for(let i = 0;i<this.props.full - this.props.empty;i++){
            cpt++;
            healthBar.push(<Heart key={cpt} type='full' />)
        }
        for(let i = 0;i<this.props.empty;i++){
            cpt++;
            healthBar.push(<Heart key={cpt} type='empty' />)
        }
        return <div className="healthbar">
            {healthBar}
        </div>;
    }
}
export default HealthBar;