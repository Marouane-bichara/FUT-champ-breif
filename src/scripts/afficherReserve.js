let reserveCardsContainer = document.querySelector('.cardsReserveplayer')



function afficherReserve()
{
    let arrayOfReserveer = JSON.parse(localStorage.getItem('arrayOfReserve')) || [];

    let dataLength = arrayOfReserveer.length

    for (let l = 0; l < dataLength; l++) {
        if(arrayOfReserveer[l].position == "GK")
        {
            reserveCardsContainer.innerHTML += `   <div class="card   max-h-[19em] h-[16em] min-w-[8em] w-[10em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
    <div class="relative  flex-col text-center">
        <div class="absolute top-4 flex items-centertext-black font-bold flex-col"><p>${arrayOfReserveer[l].position}</p><p>${arrayOfReserveer[l].rating}</p></div>
        <img src="${arrayOfReserveer[l].photo}" alt="" class="w-[7em]">
    </div>
    <h2 class="pb-1 font-bold text-[0.9em] text-black">${arrayOfReserveer[l].name}</h2>
    <div class=" w-[13em] flex text-center text-[10px] font-bold text-[#000000c0]">
        <p class="px-[1px]">DIV ${arrayOfReserveer[l].diving}</p>
        <p class="px-[1px]">HAN ${arrayOfReserveer[l].handling}</p>
        <p class="px-[1px]">KIC ${arrayOfReserveer[l].kicking}</p>
        <p class="px-[1px]">REF ${arrayOfReserveer[l].reflexes}</p>
        <p class="px-[1px]">SPE ${arrayOfReserveer[l].speed}</p>
        <p class="px-[1px]">POS ${arrayOfReserveer[l].positioning}</p>
    </div>
    <div class="flex  w-[3em] justify-between p-1">
        <img src="${arrayOfReserveer[l].flag}" alt="" class="w-[1.2em]">
        <img src="${arrayOfReserveer[l].logo}" alt="" class="w-[1em]">
    </div>
            <div class="bx bx-add-to-queue text-black text-[1.3em]" onclick="addPlayerReserve(${l})"></div>

</div>`
        }
        else{
        reserveCardsContainer.innerHTML += `<div class="card   max-h-[19em] h-[16em] min-w-[8em] w-[10em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
    <div class="relative  flex-col text-center">
        <div class="absolute top-4 flex items-centertext-black font-bold flex-col"><p>${arrayOfReserveer[l].position}</p><p>${arrayOfReserveer[0].rating}</p></div>
        <img src="${arrayOfReserveer[l].photo}" alt="" class="w-[7em]">
    </div>
    <h2 class="pb-1 font-bold text-[0.9em] text-black ">${arrayOfReserveer[l].name}</h2>
    <div class=" w-[13em] flex text-center text-[10px] font-bold text-[#000000c0]">
        <p class="px-[1px]">PAC ${arrayOfReserveer[l].pace}</p>
        <p class="px-[1px]">SHO ${arrayOfReserveer[l].shooting}</p>
        <p class="px-[1px]">PAS ${arrayOfReserveer[l].passing}</p>
        <p class="px-[1px]">DRI ${arrayOfReserveer[l].dribbling}</p>
        <p class="px-[1px]">DEF ${arrayOfReserveer[l].defending}</p>
        <p class="px-[1px]">PHY ${arrayOfReserveer[l].physical}</p>
    </div>
    <div class="flex  w-[3em] justify-between p-1">
        <img src="${arrayOfReserveer[l].flag}" alt="" class="w-[1.2em]">
        <img src="${arrayOfReserveer[l].logo}" alt="" class="w-[1em]">
    </div>
            <div class="bx bx-add-to-queue text-black text-[1.3em]" onclick="addPlayerReserve(${l})"></div>
</div>`
        }
    }
}














































function addPlayerReserve(l)
{

    arrayOfTop = JSON.parse(localStorage.getItem("arrayOfTop")) || []
    arrayofmedium = JSON.parse(localStorage.getItem("arrayofmedium")) || []
    arrayofdown = JSON.parse(localStorage.getItem("arrayofdown")) || []
    arrayoflow = JSON.parse(localStorage.getItem("arrayoflow")) || []
    let arrayOfReserveer = JSON.parse(localStorage.getItem('arrayOfReserve')) || [];

 
    if(arrayOfReserveer[l].position == "RW" || arrayOfReserveer[l].position == "ST" || arrayOfReserveer[l].position == "LW")
    {
        let found1 = 0
        for (let j = 0; j < arrayOfTop.length; j++) {
            if(arrayOfTop[j].name == arrayOfReserveer[l].name)
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
                if(arrayOfTop[f].position == arrayOfReserveer[l].position)
                {
                    for (let k = 0; k < arrayOfReserve.length; k++) {
                        if(arrayOfReserve[k].name == arrayOfReserveer[l].name)
                        {
                            found2 = 1;
                            return
                        }
                    }
                    if(!found2)
                    {

                        arrayOfReserve.push(arrayOfReserveer[l])
                        localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                        return
                    }

                }
            }

        //    if(arrayOfTop.length < 3)
        //    {
            arrayOfTop.push(arrayOfReserveer[l])
            localStorage.setItem('arrayOfTop', JSON.stringify(arrayOfTop));
            removePlayerreservreserv(l,"arrayOfReserve")

        //    }
        }
    }

    



    if(arrayOfReserveer[l].position == "CM")
        {
            let found1 = 0
            for (let j = 0; j < arrayofmedium.length; j++) {
                if(arrayofmedium[j].name == arrayOfReserveer[l].name)
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
                        if(arrayOfReserve[q].name == arrayOfReserveer[l].name)
                        {
                            found2 = 1
                            return
                        }
                    }
                    if(!found2){
                    arrayOfReserve.push(arrayOfReserveer[l])
                    localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                    return 
                    }
                }
    
                arrayofmedium.push(arrayOfReserveer[l])
                localStorage.setItem('arrayofmedium', JSON.stringify(arrayofmedium));
                removePlayerreservreserv(l,"arrayOfReserve")

            }
        }



        
    if(arrayOfReserveer[l].position == "LB" || arrayOfReserveer[l].position == "CB" || arrayOfReserveer[l].position == "RB")
        {
            let found1 = 0
            for (let j = 0; j < arrayofdown.length; j++) {
                if(arrayofdown[j].name == arrayOfReserveer[l].name)
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

                if(lengthCBplayers > 2 && arrayOfReserveer[l].position == "CB")
                {
                    
                    arrayOfReserve.push(arrayOfReserveer[l])
                    localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                    location.reload()
                    return 
                }
                if(lengthCBplayers < 2 && arrayOfReserveer[l].position == "CB")
                {
                    arrayofdown.push(arrayOfReserveer[l])
                    localStorage.setItem('arrayofdown', JSON.stringify(arrayofdown));
                    removePlayerreservreserv(l,"arrayOfReserve")
                    location.reload()
                    return
                }
                
                for (let d = 0; d < arrayofdown.length; d++) {
                    if(arrayofdown[d].position == arrayOfReserveer[l].position)
                    {
                        let  found3 = 0
                        for (let k = 0; k < arrayOfReserve.length; k++) {
                            if(arrayOfReserve[k].name == arrayOfReserveer[l].name)
                            {
                                found3 = 1
                                return
                            }
                        }
                        arrayOfReserve.push(arrayOfReserveer[l])
                        localStorage.setItem("arrayOfReserve", JSON.stringify(arrayOfReserve))
                        found2 =1
                        location.reload()
                        return
                    }
                }
                if(!found2)
                {


                    arrayofdown.push(arrayOfReserveer[l])
                    localStorage.setItem('arrayofdown', JSON.stringify(arrayofdown));
                    removePlayerreservreserv(l,"arrayOfReserve")

                    location.reload()
                    return
                }


    
                arrayofdown.push(arrayOfReserveer[l])
                localStorage.setItem('arrayofdown', JSON.stringify(arrayofdown));
                removePlayerreservreserv(l,"arrayOfReserve")

                location.reload()
            }
        }


        if(arrayOfReserveer[l].position == "GK")
        {
            let find = 0
            for (let o = 0; o < arrayoflow.length; o++) {
                if(arrayOfReserveer[l].position == arrayoflow[o].position)
                {
                    find = 1;
                }
                
            }
            if(!find)
            {
                arrayofdown.push(arrayOfReserveer[l]);
                localStorage.setItem('arrayoflow', JSON.stringify(arrayofdown));
                removePlayerreservreserv(l,"arrayOfReserve")
            }

        }

        location.reload()
}
























function removePlayerreservreserv(index, localStorageName) {
    let arrayOfPlayers = JSON.parse(localStorage.getItem(localStorageName));
    if (arrayOfPlayers && arrayOfPlayers[index]) {
        arrayOfPlayers.splice(index, 1); 
        localStorage.setItem(localStorageName, JSON.stringify(arrayOfPlayers)); 
        location.reload(); 
    }
}

afficherReserve()