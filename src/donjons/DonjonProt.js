import Utils from '../utils/Utils';

class DonjonProt{
    isExplored= false;
    boss= {
        etage:10
    };
    etages=[
        {
        couloirs:[this.getEmptyHall(4)]
        }
    ];
    temps=0;
    reset(){
        this.etages = [
            {
            couloirs:[this.getEmptyHall(4)]
            }
        ];
        this.temps = 0;
    }
    resetTemps(){
        this.temps = 0;
    }
    getEmptyHall(nbDoor){
        return {portes: Array(nbDoor).fill({status: "close"})};
    }
    getActualHall(){
        return Utils.last(Utils.last(this.etages).couloirs).portes;
    }
    getFightingChamber(){
        return Utils.last(Utils.last(this.etages).couloirs).portes.find(porte => porte.status === 'fight');
    }
}

export default DonjonProt;