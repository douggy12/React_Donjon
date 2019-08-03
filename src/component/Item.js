import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hover:false
        }
    }
    onHover(){
        this.setState({hover:true});
    }
    HoverOut(){
        this.setState({hover:false});
    }
    renderStats(){
        let stats=[];
        for (const stat in this.props.item.stats) {
            let key = 0;
            if (this.props.item.stats.hasOwnProperty(stat)) {
                stats.push(
                    <div key = {key} className = {stat}> + {this.props.item.stats[stat]}</div>
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
            <div className='info'>
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
                <div className="box">
                    {this.renderInfo()}
                </div>
               
            </div>
        );
       }else if(this.props.render === "mini"){
           const tooltypeStyle = this.state.hover ? 'block':'none';
           return(
              <div className='item' onMouseOver={()=>this.onHover()} onMouseOut={()=>this.HoverOut()}>
                <img src={this.props.item.image} alt={this.props.item.nom} />               
                <div className="mini box" style={{display:tooltypeStyle}}>
                    {this.renderInfo()}
                </div>
                
            </div> 
           );
       }
        
    }
}
export default Item;