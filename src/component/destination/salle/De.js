import React from 'react';
import { DragPreviewImage, useDrag, DragSource } from 'react-dnd'
import ItemTypes from '../../../utils/ItemTypes'

class De extends React.Component{

    render(){
        const { name, connectDragSource } = this.props;
        return connectDragSource(
            <div 
                className={"de "} 
                onClick = {this.props.onClick}
                >{this.props.de.stat.value}
            </div>
        );
    }
}
const cardSource = {
    beginDrag(props, monitor, component) {
        const de = { id: props.de.index, type:props.de.type, stat:props.de.stat };
        return de;
    }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
} 
export default DragSource("DE",cardSource,collect)(De);