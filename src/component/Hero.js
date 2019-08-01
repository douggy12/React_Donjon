import React from 'react';
import HealthBar from './HealthBar';
import Portrait from '../asset/knight.png';

class Hero extends React.Component {
    renderEquipment(){
        let cpt = 0;
        return Object.entries(this.props.hero.equipement).map(([key, value])=>{
            cpt++;
            const empty = value===null?"  empty":"";
            return <div key={cpt} className={key + " slot" + empty}>{value!==null&&<img src={value.image} alt={key} />}</div>
        });
    }
    render() {
        return (
            <div className="hero_detail">
                <div className="topbar">
                    <div className="nom">{this.props.hero.name}</div>
                    <div className="sante"><HealthBar full={this.props.hero.sante} empty={this.props.hero.damage} /></div>
                </div>
                <div className="content">
               
                    <div className="stats">
                        <div className="force">{this.props.hero.stats.force}</div>
                        <div className="agilite">{this.props.hero.stats.agilite}</div>
                        <div className="magie">{this.props.hero.stats.magie}</div>
                    </div>
                    <div className="equipement">
                        {this.renderEquipment()}
                    </div>
                    
                    <div className="portrait">
                        <img src={Portrait} alt='knight' />

                    </div>
                    
                </div>
                <div className="topbar">
                    <div className="lvl">{'LVL : ' + this.props.hero.lvl}</div>
                    <div className="xp">{'XP : ' + this.props.hero.xp + "/" + this.props.hero.getNextLvlXp(this.props.hero.lvl)}</div>
                </div>
            </div>
        );
    }
}

export default Hero;