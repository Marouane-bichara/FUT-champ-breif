let data = []
let cardContainer = document.querySelector('.cards-container');
let cardsreservContainer = document.querySelector(".cards-Reserve-player");
let arrayofplayer = []
let newdata = []
let arrayoftop = []
let arrayofReserve = []
let arrayofmeduim = []
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

    arrayoftop = JSON.parse(localStorage.getItem("arrayoftop")) || []
    arrayofmeduim = JSON.parse(localStorage.getItem("arrayofmeduim")) || []
    arrayofdown = JSON.parse(localStorage.getItem("arrayofdown")) || []
    arrayoflow = JSON.parse(localStorage.getItem("arrayoflow")) || []
    arrayofReserve = JSON.parse(localStorage.getItem('arrayofReserve')) || [];

 
    if(newdata.players[i].position == "RW" || newdata.players[i].position == "ST" || newdata.players[i].position == "LW")
    {
        let found1 = 0
        for (let j = 0; j < arrayoftop.length; j++) {
            if(arrayoftop[j].name == newdata.players[i].name)
            {
                found1 = 1;
                return;
            }
        }
        if(!found1)
        {
            let found2 = 0
            arrayofReserve = JSON.parse(localStorage.getItem("arrayofReserve")) || []
            for (let f = 0; f < arrayoftop.length; f++) {
                if(arrayoftop[f].position == newdata.players[i].position)
                {
                    for (let k = 0; k < arrayofReserve.length; k++) {
                        if(arrayofReserve[k].name == newdata.players[i].name)
                        {
                            found2 = 1;
                            return
                        }
                    }
                    if(!found2)
                    {
                        arrayofReserve.push(newdata.players[i])
                        localStorage.setItem("arrayofReserve", JSON.stringify(arrayofReserve))
                        return
                    }

                }
            }

            arrayoftop.push(newdata.players[i])
            localStorage.setItem('arrayoftop', JSON.stringify(arrayoftop));
        }
    }

    



    if(newdata.players[i].position == "CM")
        {
            let found1 = 0
            for (let j = 0; j < arrayofmeduim.length; j++) {
                if(arrayofmeduim[j].name == newdata.players[i].name)
                {
                    found1 = 1;
                    return;
                }
            }
            if(!found1)
            {
                let found2 = 0
                if(arrayofmeduim.length == 3)
                {
                    for (let q = 0; q < arrayofReserve.length; q++) {
                        if(arrayofReserve[q].name == newdata.players[i].name)
                        {
                            found2 = 1
                            return
                        }
                    }
                    if(!found2){
                    arrayofReserve.push(newdata.players[i])
                    localStorage.setItem("arrayofReserve", JSON.stringify(arrayofReserve))
                    return 
                    }
                }
    
                arrayofmeduim.push(newdata.players[i])
                localStorage.setItem('arrayofmeduim', JSON.stringify(arrayofmeduim));
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
                    console.log(lengthCBplayers);
                    
                    arrayofReserve.push(newdata.players[i])
                    localStorage.setItem("arrayofReserve", JSON.stringify(arrayofReserve))
                    location.reload()
                    return 
                }
                for (let d = 0; d < arrayofdown.length; d++) {
                    if(arrayofdown[d].position == newdata.players[i].position)
                    {
                        let  found3 = 0
                        for (let k = 0; k < arrayofReserve.length; k++) {
                            if(arrayofReserve[k].name == newdata.players[i].name)
                            {
                                found3 = 1
                                return
                            }
                        }
                        arrayofReserve.push(newdata.players[i])
                        localStorage.setItem("arrayofReserve", JSON.stringify(arrayofReserve))
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


        if(newdata.players[i].position == "CB")
        {
            let found4 = 0
       
            for (let z = 0; z < arrayoflow.length; z++) {
                if(arrayoflow[z].name == newdata.players[i].name)
                {
                    found4 = 1
                    return
                }
            }
            if(!found4)
            {
                let found5 = 0
                for (let d = 0; d < arrayoflow.length; d++) {
                    if(arrayoflow[d].position == newdata.players[i].position)
                    {
                        let  found3 = 0
                        for (let k = 0; k < arrayofReserve.length; k++) {
                            if(arrayofReserve[k].name == newdata.players[i].name)
                            {
                                found3 = 1
                                return
                            }
                        }
                        arrayofReserve.push(newdata.players[i])
                        localStorage.setItem("arrayofReserve", JSON.stringify(arrayofReserve))
                        location.reload()
                        return
                    }
                }
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