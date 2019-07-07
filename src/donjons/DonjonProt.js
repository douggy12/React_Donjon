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
    reset(){
        this.etages = [
            {
            couloirs:[this.getEmptyHall(4)]
            }
        ];
    }
    getEmptyHall(nbDoor){
        return {portes: Array(nbDoor).fill({status: "close"})};
    }
}

export default DonjonProt;