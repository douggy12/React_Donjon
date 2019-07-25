import React from 'react';

class Item extends React.Component{
    renderStats(){
        let stats=[];
        for (const stat in this.props.item.stats) {
            if (this.props.item.stats.hasOwnProperty(stat)) {
                stats.push(
                    <div className = {stat}>{this.props.item.stats[stat]}</div>
                );                
            }
        }
        return(
            <div className='stats'>{stats}</div>
        );    

    }
    renderInfo(){
        return(
            <div className='stats'>
                <div className='nom'>{this.props.item.nom}</div>
                {this.renderStats()}
            </div>
        )
    }
    render(){
        return(
            <div className='item' onMouseOver={()=>this.renderInfo()}>
                <img src={this.props.item.image} alt={this.props.item.nom} />
            </div>
        );
    }
}
export default Item;