let data = []
let cardContainer = document.querySelector('.cards-container');
let cardsreservContainer = document.querySelector(".cards-Reserve-player");
let arrayofplayer = []
let newdata = []
let arrayOfTop = []
let arrayOfReserve = []
let arrayofmedium = []
let arrayofdown = []
let arrayoflow = []

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

    arrayOfTop = JSON.parse(localStorage.getItem("arrayOfTop")) || []
    arrayofmedium = JSON.parse(localStorage.getItem("arrayofmedium")) || []
    arrayofdown = JSON.parse(localStorage.getItem("arrayofdown")) || []
    arrayoflow = JSON.parse(localStorage.getItem("arrayoflow")) || []
    arrayOfReserve = JSON.parse(localStorage.getItem('arrayOfReserve')) || [];

 
    if(newdata.players[i].position == "RW" || newdata.players[i].position == "ST" || newdata.players[i].position == "LW")
    {
        let found1 = 0
        for (let j = 0; j < arrayOfTop.length; j++) {
            if(arrayOfTop[j].name == newdata.players[i].name)
            {
                found1 = 1;
                return;
            }
        }
        if(!found1)
        {
            let found2 = 0
            arrayOfReserve = JSON.parse(localStorage.getItem("arrayOfReserve")) || []
            
            for (let f = 0; f < arrayOfTop.length; f++) {
                if(arrayOfTop[f].position == newdata.players[i].position)
                {
                    for (let k = 0; k < arrayOfReserve.length; k++) {
                        if(arrayOfReserve[k].name == newdata.players[i].name)
                        {
                            found2 = 1;
                            return
                        }
                    }
                    if(!found2)
                    {

                        arrayOfReserve.push(newdata.players[i])
                        localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                        return
                    }

                }
            }

        //    if(arrayOfTop.length < 3)
        //    {
            arrayOfTop.push(newdata.players[i])
            localStorage.setItem('arrayOfTop', JSON.stringify(arrayOfTop));
        //    }
        }
    }

    



    if(newdata.players[i].position == "CM")
        {
            let found1 = 0
            for (let j = 0; j < arrayofmedium.length; j++) {
                if(arrayofmedium[j].name == newdata.players[i].name)
                {
                    found1 = 1;
                    return;
                }
            }
            if(!found1)
            {
                let found2 = 0
                if(arrayofmedium.length == 3)
                {
                    for (let q = 0; q < arrayOfReserve.length; q++) {
                        if(arrayOfReserve[q].name == newdata.players[i].name)
                        {
                            found2 = 1
                            return
                        }
                    }
                    if(!found2){
                    arrayOfReserve.push(newdata.players[i])
                    localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                    return 
                    }
                }
    
                arrayofmedium.push(newdata.players[i])
                localStorage.setItem('arrayofmedium', JSON.stringify(arrayofmedium));
            }
        }



        
    if(newdata.players[i].position == "LB" || newdata.players[i].position == "CB" || newdata.players[i].position == "RB")
        {
            let found1 = 0
            for (let j = 0; j < arrayofdown.length; j++) {
                if(arrayofdown[j].name == newdata.players[i].name)
                {
                    found1 = 1;
                    return;
                }
            }
            if(!found1)
            {
                let found2 = 0
                let lengthCBplayers = 0
                for (let g = 0; g < arrayofdown.length; g++) {
                    if(arrayofdown[g].position.includes("CB"))
                    {
                        lengthCBplayers++;
                    }
                }

                if(lengthCBplayers > 2)
                {
                    
                    arrayOfReserve.push(newdata.players[i])
                    localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                    location.reload()
                    return 
                }
                if(lengthCBplayers < 2)
                {
                    arrayofdown.push(newdata.players[i])
                    localStorage.setItem('arrayofdown', JSON.stringify(arrayofdown));
                    location.reload()
                    return
                }
                for (let d = 0; d < arrayofdown.length; d++) {
                    if(arrayofdown[d].position == newdata.players[i].position)
                    {
                        let  found3 = 0
                        for (let k = 0; k < arrayOfReserve.length; k++) {
                            if(arrayOfReserve[k].name == newdata.players[i].name)
                            {
                                found3 = 1
                                return
                            }
                        }
                        arrayOfReserve.push(newdata.players[i])
                        localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                        found2 =1
                        location.reload()
                        return
                    }
                }
                if(!found2)
                {


                    arrayofdown.push(newdata.players[i])
                    localStorage.setItem('arrayofdown', JSON.stringify(arrayofdown));
                    location.reload()
                    return
                }


    
                arrayofdown.push(newdata.players[i])
                localStorage.setItem('arrayofdown', JSON.stringify(arrayofdown));
                location.reload()
            }
        }


        if(newdata.players[i].position == "GK")
        {
            let indexofarrayofLow = 0
            let found7 = 0
            for (let p = 0; p < arrayoflow.length; p++) {
               if(arrayoflow[p].position.includes("GK"))
               {
                indexofarrayofLow++
               }
            }
            if(indexofarrayofLow != 1)
            {    
                arrayoflow.push(newdata.players[i])
                localStorage.setItem('arrayoflow', JSON.stringify(arrayoflow));
                location.reload() 
                return
            }

            let foundlayer = 0
            for (let k = 0; k < arrayoflow.length; k++) {
                if(arrayoflow[k].name == newdata.players[i].name)
                {
                    console.log("user deja");
                    location.reload()
                    return;
                }
            }
            for (let s = 0; s < arrayOfReserve.length; s++) {
                if(arrayOfReserve[s].name == newdata.players[i].name)
                {
                    foundlayer = 1
                }
            }
            if(!foundlayer)
            {
                arrayOfReserve.push(newdata.players[i])
                localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
            }


        }

        location.reload()
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