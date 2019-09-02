import React from 'react';
import style from './power.module.css';

class Power extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        }
    }
    onHover(){
        this.setState({expanded: true});
    }
    hoverOut(){
        this.setState({expanded: false});
        
    }
    render(){
        return(
            <div className={style.card} onMouseEnter={()=> this.onHover()} onMouseLeave={()=>this.hoverOut()}>
                {this.state.expanded && this.props.power.sacrifier !== undefined && <div className={style.verb}>Sacrifier {this.props.power.sacrifier.nb} dé(s) {this.props.power.sacrifier.type}</div>}
                {this.state.expanded && this.props.power.ajouter !== undefined && <div className={style.verb}>Ajouter {this.props.power.sacrifier.nb} sur {this.props.power.sacrifier.on} de vos dés de type {this.props.power.sacrifier.type}</div>}
                <div className={style.nom}>{this.props.power.nom}</div>
            </div>
            
        );
    }
}
export default Power;