import React from 'react';

class Item extends React.Component{
    renderStats(){
        let stats=[];
        for (const stat in this.props.item.item.stats) {
            let key = 0;
            if (this.props.item.item.stats.hasOwnProperty(stat)) {
                stats.push(
                    <div key = {key} className = {stat}> + {this.props.item.item.stats[stat]} {stat}</div>
                ); 
                key ++;               
            }
        }
        return(
            <div className='stats'>{stats}</div>
        );    

    }
    renderInfo(){
        
        return(
            <div className='box'>
                <div className='nom'>{this.props.item.item.nom}</div>
                {this.renderStats()}
            </div>
        )
    }
    render(){
       
        return(
            <div className='item'>
                <img src={this.props.item.item.image} alt={this.props.item.item.nom} />
                {this.renderInfo()}
            </div>
        );
    }
}
export default Item;