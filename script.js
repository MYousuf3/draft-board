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
array[12] = new Player("Ceedee Lamb", "WR", "7", "DAL");
array[13] = new Player("Davante Adams", "WR", "13", "LV");
array[14] = new Player("AJ Brown", "WR", "10", "PHI");
array[15] = new Player("Amon-Ra St. Brown", "WR", "9", "DET");
array[16] = new Player("Garrett Wilson", "WR", "7", "NYJ");
array[17] = new Player("Tony Pollard", "RB", "7", "DAL");
array[18] = new Player("Jaylen Waddle", "WR", "10", "MIA");
array[19] = new Player("Chris Olave", "WR", "11", "NO");
array[20] = new Player("Derrick Henry", "RB", "7", "TEN");
array[21] = new Player("Rhamondre Stevenson", "RB", "11", "NE");
array[22] = new Player("DeVonta Smith", "WR", "10", "PHI");
array[23] = new Player("Josh Jacobs", "RB", "13", "LV");
array[24] = new Player("Tee Higgins", "WR", "7", "CIN");
array[25] = new Player("Patrick Mahomes", "QB", "10", "KC");
array[26] = new Player("Josh Allen", "QB", "13", "BUF");
array[27] = new Player("DK Metcalf", "WR", "5", "SEA");
array[28] = new Player("Jalen Hurts", "QB", "10", "PHI");
array[29] = new Player("Jahmyr Gibbs", "RB", "9", "DET");

let str = "";
let isBetter = 0;
let i, key, j;
let onMain = true;
let n = array.length;
i = 1;

let button1 = document.getElementById("fakeButtonOne");
let button2 = document.getElementById("fakeButtonTwo");
document.getElementById("fakeButtonOne").onclick = function(){helperSort(array, false)};
document.getElementById("fakeButtonTwo").onclick = function(){helperSort(array, true)};

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


function mainSort(array){
    if(i==n)
        endSort();
    key = array[i];
    j = i-1;
    if(j>=0 && i<n)
        updateCards(array[j], key);
}
function helperSort(array, draftFirst)
{
    console.log(array);
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
    }
}

function endSort(){
    console.log("sort finished");
    button1.onclick = null;
    button2.onclick = null;
    arrayPrint();
    sessionStorage.setItem('resultArray', JSON.stringify(array));
    window.location.href='results.html';

}

function arrayPrint(){
    for(let i = 0;i<array.length;i++)
    {
        array[i] = array[i].getName;
    }
}
mainSort(array);
