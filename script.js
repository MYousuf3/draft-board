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
array[0] = new Player("Justin Jefferson", "WR", "13", "MIN");
array[1] = new Player("Christian McCaffery", "RB", "9", "SF");
array[2] = new Player("Ja'Marr Chase", "WR", "7", "CIN");
array[3] = new Player("Cooper Kupp", "WR", "10", "LAR");
array[4] = new Player("Austin Ekeler", "RB", "5", "LAC");
array[5] = new Player("Tyreek Hill", "WR", "10", "MIA");
array[6] = new Player("Bijan Robinson", "RB", "11", "ATL");
array[7] = new Player("Travis Kelce", "TE", "10", "KC");
array[8] = new Player("Saquon Barkley", "RB", "13", "NYG");
array[9] = new Player("Jonathan Taylor", "RB", "11", "IND");
array[10] = new Player("Stefon Diggs", "WR", "13", "BUF");
array[11] = new Player("Nick Chubb", "RB", "5", "CLE");
console.log(array);


document.getElementById("fakeButtonOne").onclick = updateCards;
document.getElementById("fakeButtonTwo").onclick = updateCards;

function updateCards(){
    let x = Math.floor(Math.random() * 12);
    let y = Math.floor(Math.random() * 12);
    document.getElementById("nameOne").innerHTML = array[x].getName;
    document.getElementById("nameTwo").innerHTML = array[y].getName;
    document.getElementById("positionOne").innerHTML = array[x].getPosition;
    document.getElementById("positionTwo").innerHTML = array[y].getPosition;
    document.getElementById("teamOne").innerHTML = array[x].getTeam;
    document.getElementById("teamTwo").innerHTML = array[y].getTeam;
    document.getElementById("byeOne").innerHTML = "Bye Week: " + array[x].getByeWeek;
    document.getElementById("byeTwo").innerHTML = "Bye Week: " + array[y].getByeWeek;
}

function insertionSort(array)
{
    let i, key, j;
    key = array[i];
    j = i-1;
    while(j >= 0 && betterPlayer(array[j], key))
    {
        array[j+1] = array[j];
        j = j-1;
    }
    array[j+1] = key;
}

function betterPlayer(player, key)
{
    return true;
}