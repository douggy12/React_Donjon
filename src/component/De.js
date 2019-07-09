import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd'
import ItemTypes from '../utils/ItemTypes'

class De extends React.Component{

    isSelectedDice(){
        if(this.props.de.type===this.props.selectedDice.type && this.props.de.index===this.props.selectedDice.index){
            return true;
        }
        return false;
    }

    render(){
        // const [{ isDragging }, drag] = useDrag({
        //     item: { type: ItemTypes.DE },
        //     collect: monitor => ({
        //       isDragging: !!monitor.isDragging(),
        //     }),
        //   })
        return(
            <div 
                className={"de " + (this.isSelectedDice()?"focus":"")} 
                onClick = {this.props.onClick}
                >
            </div>
        );
    }
}
export default De;