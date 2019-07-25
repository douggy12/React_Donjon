import Casque from '../equipement/asset/head_1.png';
import Torso from '../equipement/asset/torso_1.png';
import Bottes from '../equipement/asset/boots_1.png';
import Bouclier from '../equipement/asset/shield_1.png';
import Epee from '../equipement/asset/sword_1.png';
import Item from '../equipement/Item';
import Utils from '../utils/Utils';
class RatAffame{
    
    nom= "Rat affamé";
    stats= [
        { type: "force", value: 2, multi: false, required: true, damages: [] },
        { type: "force", value: 3, multi: false, damages: [1, 1] },
        { type: "agilite", value: 2, multi: true, damages: [null, 1] }
    ];
    requiredDone= false;
    xp= 1;
    dropTable = [
        {item:new Item('tete','casquette à plume',{magie:1},0,Casque),chance:15},
        {item:new Item('main_d','épée d\'entrainement',{force:1},0,Epee),chance:15},
        {item: new Item('main_g','targe en bois',{sante:1},0,Bouclier),chance:15},
        {item: new Item('buste','veste matelassée',{sante:1,force:1},0,Torso),chance:10},
        {item: new Item('bottes','bottes de cuir',{agilite:1},0,Bottes),chance:15}
    ];

    dropObject(){
        this.dropTable.forEach((object)=>{
            if(Utils.getRandomInt(100)<=object.chance){
                return object;
            }
        });
        return null;
    }

    

}
export default RatAffame;