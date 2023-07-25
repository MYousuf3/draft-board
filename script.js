class Player{
    constructor(pName, position, byeWeek, team){
    this.pName = pName;
    this.position = position;
    this.byeWeek = byeWeek;
    this.team = team;
    }
    get getName(){
        return this.pName;
    }
    get getPosition(){
        return this.position;
    }
    get getByeWeek(){
        return this.byeWeek;
    }
    get getTeam(){
        return this.team;
    }

    set newName(newName){
        this.pName = newName;
    }
}
let array = [];
const player = new Player("Justin Jefferson", "WR", "12", "MIN");
array.push(player);
console.log(array);
