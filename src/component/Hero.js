import React from 'react';
import HealthBar from './HealthBar';
import Portrait from '../asset/knight.png';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero_detail">
                <div className="topbar">
                    <div className="nom">{this.props.hero.name}</div>
                    <div className="sante"><HealthBar full={this.props.hero.sante} empty={this.props.hero.damage} /></div>
                </div>
                <div className="portrait">
                    <img src={Portrait} alt='knight' />

                </div>
                <div className="topbar">
                    <div className="lvl">{'LVL : ' + this.props.hero.lvl}</div>
                    <div className="xp">{'XP : ' + this.props.hero.xp + "/" + this.props.hero.getNextLvlXp()}</div>
                </div>
            </div>
        );
    }
}

export default Hero;