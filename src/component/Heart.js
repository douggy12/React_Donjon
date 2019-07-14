import React from 'react';
import Heart_full from '../asset/heart_sup_full.png';
import Heart_empty from '../asset/heart_sup_empty.png';

class Heart extends React.Component {

    render(){
        if(this.props.type === 'full'){
            return <img src={Heart_full} alt='heart full' />
        }else{
            return <img src={Heart_empty} alt='heart empty' />
        }
    }
}
export default Heart;