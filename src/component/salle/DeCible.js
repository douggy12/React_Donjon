import React from 'react';
import { DropTarget } from 'react-dnd';
import Heart from 'asset/heart.png';
import Hourglass from 'asset/hourglass2.png';
import Shield from 'asset/shield.png';

class DeCible extends React.Component {
    isPossible() {
        if (!this.props.cible.stat.value === 0) {
            return true;
        }
        return false;
    }
    renderDmg(index,damage){
        if(index === 0 && damage){
            return (
               <div key={index} className="damage">
                   {damage}
                   <img src={Heart} alt="heart" />
                </div>                
                );
        } else if (index === 1 && damage){
            return (
                <div key={index} className="damage">
                    {damage}
                    <img src={Hourglass} alt="hourglass" />
                </div>                
                );
        }
        return null;
    }
    render() {
        const { isOver, canDrop, connectDropTarget, droppedItem } = this.props;
        
        const damages = this.props.cible.stat.damages.map((damage, index) => {
            return this.renderDmg(index,damage);            
        })
        return connectDropTarget(
            <div
                className={this.props.cible.stat.type + " cible" + (this.props.cible.stat.value === 0 ? " fill" : " empty") + (canDrop ? " possible" : "") + (this.props.cible.stat.multi ? " multi" : "")}
            >
                <div className="value">{this.props.cible.stat.value}</div>
                <div className="damages">
                    {this.props.cible.stat.required && <div className="damage"><img src={Shield} alt="shield" /></div>}
                    {damages}
                </div> 
            </div>
        );
    }
}
const spec = {
    drop(props, monitor, component) {
        const item = monitor.getItem()
        const target = component.props.cible;
        props.onDrop(item, target)
    },
    canDrop(props, monitor) {
        const target = props.cible;
        const item = monitor.getItem();
        if (item.type === target.stat.type 
            && target.stat.value !== 0 
            && (item.stat.value >= target.stat.value || target.stat.multi) 
            ) {
                if(props.requiredDone || props.cible.stat.required){
                    return true;
                }
            
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