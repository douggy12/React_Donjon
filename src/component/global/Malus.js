import React from 'react';
import Hourglass from '../../asset/hourglass2.png';

class Malus extends React.Component{
    render(){
        return(
            <div className='malus'>
        (+{this.props.malus.temps} <img src={Hourglass} alt='hourglass' />)
        </div>
        );
        
    }
}
export default Malus;