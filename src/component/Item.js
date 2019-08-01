import React from 'react';

class Item extends React.Component{
    renderStats(){
        let stats=[];
        for (const stat in this.props.item.stats) {
            let key = 0;
            if (this.props.item.stats.hasOwnProperty(stat)) {
                stats.push(
                    <div key = {key} className = {stat}> + {this.props.item.stats[stat]} {stat}</div>
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
                <div className='nom'>{this.props.item.nom}</div>
                {this.renderStats()}
            </div>
        )
    }
    render(){
       if(this.props.render === "info"){
        return(
            <div className='item'>
                <img src={this.props.item.image} alt={this.props.item.nom} />
                {this.renderInfo()}
            </div>
        );
       }else if(this.props.render === "mini"){
           return(
              <div className='item'>
                <img src={this.props.item.image} alt={this.props.item.nom} />
            </div> 
           );
       }
        
    }
}
export default Item;