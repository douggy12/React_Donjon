import React from 'react';
import { DropTarget } from 'react-dnd';
import De from './De';

class DeCible extends React.Component {
    isPossible() {
        if (!this.props.cible.stat.isFill) {
            return true;
        }
        return false;
    }
    render(){
        const { isOver, canDrop, connectDropTarget, droppedItem } = this.props;
        return connectDropTarget(
             <div
                className={this.props.cible.stat.type + " cible" + (this.props.cible.stat.isFill ? " fill" : " empty" ) + (canDrop? " possible":"" )}
                
            >{this.props.cible.stat.nb}</div>
        );
    }
}
const spec = {
    drop(props, monitor, component){
        const item = monitor.getItem()
        const target = component.props.cible;
        props.onDrop(item,target)
    },
    canDrop(props, monitor){
        const target = props.cible;
        const item = monitor.getItem();
        if(item.type === target.stat.type && !target.stat.isFill){
            return true;
        }
        return false;
       
    }
}
function collect(connect, monitor) {
  return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
  };
}
export default DropTarget("DE", spec, collect)(DeCible);