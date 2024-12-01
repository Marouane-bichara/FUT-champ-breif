


function deletPlayers(i)
{
    let arrayofData = JSON.parse(localStorage.getItem("newdata"));
    console.log(arrayofData.players[i]);
    arrayofData.players.splice(i, 1); 
    localStorage.setItem("newdata" , JSON.stringify(arrayofData))
    location.reload()
}