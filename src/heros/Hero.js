import IconFp1 from 'asset/power/fp1.png';
class Hero{
    name="BrakinBaad";
    sante=4;
    damage = 0;
    stats= this.getInitialStats();
    xp = 0;
    lvl = 1;
    equipement = this.getInitialEquipement();
    pouvoir = [
        {
            nom: "Frappe précise",
            sacrifier: {type:"agility",nb: 1,min:1},
            ajouter: {type:"force",nb:2,on:1},
            icon: IconFp1
        },
        {
            nom: "Frappe précise",
            sacrifier: {type:"agility",nb: 1,min:1},
            ajouter: {type:"force",nb:2,on:1},
            icon: IconFp1
        }
    ];

    getInitialEquipement(){
        return {
            helmet:null,
            torso:null,
            gauntlet:null,
            boots:null,
            handR:null,
            handL:null
        };
    }
    getSante(){
        
        return this.sante + + this.getEquipmentStat("sante");
    }
    getStat(stat){
        
        return this.stats[stat] + this.getEquipmentStat(stat);
    }

    getEquipmentStat(stat){
        let equipementStat = 0;
        Object.values(this.equipement).forEach((item)=>{
            if(item !== null && item.stats.hasOwnProperty(stat)){
                equipementStat += item.stats[stat];
            }
        });
        return equipementStat;
    }

    equip(item){
        if((item !== null || item !== undefined) && this.equipement.hasOwnProperty(item.type)){
            this.equipement[item.type] = item;
        }else{
            console.log('erreur item: ' + item);
        }

        
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
    earnObject(object){
        this.equipement[object.type] = object;
    }
    lvlUp(){
        while(this.xp >= this.getNextLvlXp(this.lvl)){
            this.lvl += 1;
        }
    }
    
}
export default Hero;