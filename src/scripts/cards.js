let data = []
let cardContainer = document.querySelector('.cards-container');
let cardsreservContainer = document.querySelector(".cards-Reserve-player");
let arrayofplayer = []
let newdata = []
let arrayofReserve = []

async function fetchData()
{
    let respo  = await fetch("../src/scripts/players.json")
    data = await respo.json()
     newdata = data
     localStorage.setItem("newdata" , JSON.stringify(newdata));
    afficherCards()
}



function addPlayer(i)
{
    let found = 0
    arrayofplayer = JSON.parse(localStorage.getItem("arrayOfPlayers")) || []
    arrayofReserve = JSON.parse(localStorage.getItem('arrayofReserve')) || [];


        let dataLength = arrayofplayer.length;
        for (let j = 0; j < dataLength; j++) {
            if (arrayofplayer[j].name == newdata.players[i].name) {
                found = 1;
                 return
            }

        }
        
        if(!found)
        {
            for (let x = 0; x < dataLength; x++) {
                if(arrayofplayer[x].position == newdata.players[i].position)
                {
                    // arrayofReserve.push(newdata.players[i])
                    // localStorage.setItem(JSON.stringify("arrayofReserve",arrayofReserve))
                    let found1 = 0
                    for (let m = 0; m < arrayofReserve.length; m++) {
                        if(arrayofReserve[m].name == newdata.players[m].name)
                        {
                            found = 1
                            return;
                        }
                    }
                    if(!found)
                    {
                        console.log(newdata.players[i]);
                        arrayofReserve.push(newdata.players[i])
                        console.log(arrayofReserve);
                        localStorage.setItem("arrayofReserve",JSON.stringify(arrayofReserve))
                        return
                    }

                }
            }
            arrayofplayer.push(newdata.players[i])
            localStorage.setItem("arrayOfPlayers", JSON.stringify(arrayofplayer))
        }


}




































function afficherCards()
{
    newdata = JSON.parse(localStorage.getItem("newdata"));
    let dataLength = newdata.players.length
    for (let i = 0; i < dataLength; i++) {


    if(data.players[i].position != "GK")
    {
        cardContainer.innerHTML += `
        <div class="card  max-h-[19em] h-[16em] min-w-[8em] w-[10em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
    <div class="relative  flex-col text-center">
        <div class="absolute top-4 flex items-centertext-black font-bold flex-col"><p>${newdata.players[i].position}</p><p>${newdata.players[i].rating}</p></div>
        <img src="${newdata.players[i].photo}" alt="" class="w-[7em]">
    </div>
    <h2 class="pb-1 font-bold text-[0.9em] text-black">${newdata.players[i].name}</h2>
    <div class=" w-[13em] flex text-center text-[10px] font-bold text-[#000000c0]">
        <p class="px-[1px]">PAC ${newdata.players[i].pace}</p>
        <p class="px-[1px]">SHO ${newdata.players[i].shooting}</p>
        <p class="px-[1px]">PAS ${newdata.players[i].passing}</p>
        <p class="px-[1px]">DRI ${newdata.players[i].dribbling}</p>
        <p class="px-[1px]">DEF ${newdata.players[i].defending}</p>
        <p class="px-[1px]">PHY ${newdata.players[i].physical}</p>
    </div>
    <div class="flex  w-[3em] justify-between p-1">
        <img src="${newdata.players[i].flag}" alt="" class="w-[1.2em]">
        <img src="${newdata.players[i].logo}" alt="" class="w-[1em]">
    </div>
        <div class='bx bx-add-to-queue text-black p-1' onclick="addPlayer(${i})"></div>

</div>
`
    }
    else{
        cardContainer.innerHTML += `
        <div class="card  max-h-[19em] h-[16em] min-w-[8em] w-[10em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
    <div class="relative  flex-col text-center">
        <div class="absolute top-4 flex items-centertext-black font-bold flex-col"><p>${newdata.players[i].position}</p><p>${newdata.players[i].rating}</p></div>
        <img src="${newdata.players[i].photo}" alt="" class="w-[7em]">
    </div>
    <h2 class="pb-1 font-bold text-[0.9em] text-black ">${newdata.players[i].name}</h2>
    <div class=" w-[13em] flex text-center text-[10px] font-bold text-[#000000c0]">
        <p class="px-[1px]">DIV ${newdata.players[i].diving}</p>
        <p class="px-[1px]">HAN ${newdata.players[i].handling}</p>
        <p class="px-[1px]">KIC ${newdata.players[i].kicking}</p>
        <p class="px-[1px]">REF ${newdata.players[i].reflexes}</p>
        <p class="px-[1px]">SPE ${newdata.players[i].speed}</p>
        <p class="px-[1px]">POS ${newdata.players[i].positioning}</p>
    </div>
    <div class="flex  w-[3em] justify-between p-1">
        <img src="${newdata.players[i].flag}" alt="" class="w-[1.2em]">
        <img src="${newdata.players[i].logo}" alt="" class="w-[1em]">
    </div>
    <div class='bx bx-add-to-queue text-black p-1' onclick="addPlayer(${i})"></div>
</div>
`
    }
 
    }
}
fetchData()