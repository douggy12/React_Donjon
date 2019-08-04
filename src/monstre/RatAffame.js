import Casque from '../equipement/asset/head_1.png';
import Torso from '../equipement/asset/torso_1.png';
import Bottes from '../equipement/asset/boots_1.png';
import Bouclier from '../equipement/asset/shield_1.png';
import Epee from '../equipement/asset/sword_1.png';
import Item from '../equipement/Item';
import Utils from '../utils/Utils';
import ChauveSouris from '../monstre/assets/bat.png';
class RatAffame{
    
    nom= "Rat affamé";
    image= ChauveSouris;
    stats= this.getInitialStats();
    requiredDone= false;
    xp= 1;
    dropTable = [
        {item:new Item('helmet','casquette à plume',{magie:1},0,Casque),chance:30},
        {item:new Item('handR','épée d\'entrainement',{force:1},0,Epee),chance:30},
        {item: new Item('handL','targe en bois',{sante:1},0,Bouclier),chance:50},
        {item: new Item('torso','veste matelassée',{sante:1,force:1},0,Torso),chance:70},
        {item: new Item('boots','bottes de cuir',{agilite:1},0,Bottes),chance:100}
    ];
    getInitialStats(){
        return  [
            { type: "force", value: 2, multi: false, required: true, damages: [] },
            { type: "force", value: 3, multi: false, damages: [1, 1] },
            { type: "agilite", value: 3, multi: true, damages: [null, 1] }
        ];
    }
    dropObject(){
        for (const object of this.dropTable) {
            const de = Utils.getRandomInt(100);
            if(de <= object.chance){
                return object;
            }
        }
        return null;
    }

    reset(){
        this.stats = this.getInitialStats();
    }

    

}
export default RatAffame;