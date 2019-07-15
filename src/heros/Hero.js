class Hero{
    name="BrakinBaad";
    sante=4;
    damage = 0;
    stats= this.getInitialStats();

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
    }
    
}
export default Hero;