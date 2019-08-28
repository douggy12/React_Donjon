import React from 'react';
import Item from 'component/global/Item';

class PowerUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            powerUp : this.props.powerUp,
        }
    }
    choosePowerUp(lvl){
        let powerUp = this.state.powerUp;
        powerUp.splice(powerUp.findIndex((pow)=>pow===lvl),1);
        this.setState({powerUp: powerUp});
    }

    renderButin(object){
        return(
            <div className='butin'>
                <h3>Vous avez trouvé {object.item.nom}</h3>
                <Item item={object.item} render="info" />
                <button onClick={()=>this.props.equiper(object.item)}>Equiper</button>
                <button onClick={()=> this.quit()}>Jeter</button>
            </div>
           
        );
    }
    
    render(){
        let powerUp=[];
        
        this.state.powerUp.forEach((lvl)=>{
            powerUp.push(
                <div >
                    <h2>Vous avez atteint le niveau {lvl}</h2>
                    <div>Choisir un nouveau pouvoir</div>
                    <button onClick={()=>this.choosePowerUp(lvl)}>Choisir</button>
                    <button onClick={()=>this.choosePowerUp(lvl)}>Choisir</button>
                    <button onClick={()=>this.choosePowerUp(lvl)}>Choisir</button>
                </div>
            );
        });

        return (
            <div>
                {powerUp}
                {this.state.powerUp.length === 0 && this.props.earnedObject !== null && this.renderButin(this.props.earnedObject)}
                {this.state.powerUp.length === 0 && this.props.earnedObject === null &&<h3>Vous n'avez rien trouvé dans la salle</h3>}
            </div>
        )
    }
}
export default PowerUp;