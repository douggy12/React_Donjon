import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd'
import ItemTypes from '../utils/ItemTypes'

class De extends React.Component{

    // isSelectedDice(){
    //     if(this.props.de.index===this.props.selectedDice.index){
    //         return true;
    //     }
    //     return false;
    // }

    render(){
        return(
            <div 
                className={"de "} 
                onClick = {this.props.onClick}
                >
            </div>
        );
    }
}
export default De;