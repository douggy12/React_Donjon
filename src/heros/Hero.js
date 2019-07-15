class Hero{
    name="BrakinBaad";
    sante=4;
    damage = 0;
    stats= this.getInitialStats();
    xp = 0;
    lvl = 1;

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
    getNextLvlXp(){
        return Math.floor(Math.exp(this.lvl)+1);
    }
    
}
export default Hero;