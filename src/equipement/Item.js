class Item {

    type="casque";
    nom="Bassinet du Hérault";
    stats={
        sante:1,
        force:1
    }
    image;
    rarete=0;
    
    constructor(type,nom,stats,rarete,image){
        this.type = type;
        this.nom = nom;
        this.stats = stats;
        this.image = image;
        this.rarete = rarete;
    } 
}
export default Item;