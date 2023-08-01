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

let str = "";
let isBetter = 0;
let i, key, j;
let onMain = true;
let n = array.length;
i = 1;


let array2 = [];
array2[0] = 3;
array2[1] = 4;
array2[2] = 1;
array2[3] = 5;
array2[4] = 2;
array2[5] = 6;
array2[6] = 0;
let button1 = document.getElementById("fakeButtonOne");
let button2 = document.getElementById("fakeButtonTwo");
document.getElementById("fakeButtonOne").onclick = function(){helperSort(array, false)};
document.getElementById("fakeButtonTwo").onclick = function(){helperSort(array, true)};
//button1.onclick = helperSort(array, true);
//button2.onclick = helperSort(array, false);

function pickBetter(x){
    isBetter = x;
}

function updateCards(x, y){
    document.getElementById("nameOne").innerHTML = x.getName;
    document.getElementById("nameTwo").innerHTML = y.getName;
    document.getElementById("positionOne").innerHTML = x.getPosition;
    document.getElementById("positionTwo").innerHTML = y.getPosition;
    document.getElementById("teamOne").innerHTML = x.getTeam;
    document.getElementById("teamTwo").innerHTML = y.getTeam;
    document.getElementById("byeOne").innerHTML = "Bye Week: " + x.getByeWeek;
    document.getElementById("byeTwo").innerHTML = "Bye Week: " + y.getByeWeek;
}

function insertionSort(array, betterPlayer)
{
    let n = array.length
    let i, key, j;
    //for(i=1;i<n;i++){
        key = array[i];
        j = i-1;
        let isBetter = (prompt(`Which player is better? Enter '1' for ${array2[i]} or '2' for ${array2[j]}:`)== '1');
        console.log(isBetter);
        //while(j >= 0 && (isBetter))
        //{
            array[j+1] = array[j];
            j = j-1;
            if(j>=0)
                isBetter = (prompt(`Which player is better? Enter '1' for ${array2[i]} or '2' for ${array2[j]}:`)== '1');
        //}
        array[j+1] = key;
        
    //}
}

function mainSort(array){
    if(i==n)
        endSort();
    key = array[i];
    j = i-1;
    console.log(j);
    console.log(array[j].getName);
    if(j>=0 && i<n)
        updateCards(array[j], key);
}
function helperSort(array, draftFirst)
{
    console.log("hi");
    if(j<0 || !draftFirst)
    {
        array[j+1] = key;
        i++;
        mainSort(array);
    }
    else{
        array[j+1] = array[j];
        j = j-1;
        if(j>=0)
            updateCards(array[j], key);
        arrayPrint();
    }
}

function endSort(){
    console.log("sort finished");
    button1.onclick = null;
    button2.onclick = null;
    arrayPrint();
    document.getElementById("change-this").innerHTML = str;
    document.getElementById("change-this").size = 8;

}

function arrayPrint(){
    str = "";
    array.forEach(element => {
        str+= element.getName + ", "
        //console.log(element.getName);
    });
}
function betterPlayer(player1, player2)
{
    //updateCards(player1, player2);
    let choice = prompt(`Which player is better? Enter '1' for ${array2[player1]} or '2' for ${array2[player2]}:`);
        return choice === '1';
}
mainSort(array);
