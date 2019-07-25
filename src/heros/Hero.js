class Hero{
    name="BrakinBaad";
    sante=4;
    damage = 0;
    stats= this.getInitialStats();
    xp = 0;
    lvl = 1;
    equipement = this.getInitialEquipement();

    getInitialEquipement(){
        return {
            helmet:{},
            torso:{},
            gauntlet:{},
            boots:{},
            handR:{},
            handL:{}
        };
    }

    equip(item){
        this.equipement[item.type] = item;
    }

    getInitialStats(){
        return {
            force : 3,
            agilite : 2,
            magie : 2,
        }
    }
    reset(){
        this.stats = this.getInitialStats();
        this.sante = 4;
        this.damage = 0;
        this.xp = 0;
        this.lvl = 1;
    }
    getNextLvlXp(lvl){
        return Math.floor(Math.exp(lvl)+1);
    }
    earnXp(xp){
        this.xp += xp;
        this.lvlUp();
    }
    lvlUp(){
        while(this.xp >= this.getNextLvlXp(this.lvl)){
            this.lvl += 1;
        }
    }
    
}
export default Hero;