let reserveCardsContainer = document.querySelector('.cardsReserveplayer')



function afficherReserve()
{
    // let arrayOfReserve = JSON.parse(localStorage.getItem("arrayOfReserve")) ||[]
    let arrayOfReserveer = JSON.parse(localStorage.getItem('arrayOfReserve')) || [];

    let dataLength = arrayOfReserveer.length
console.log(arrayOfReserveer);

    for (let l = 0; l < dataLength; l++) {
        reserveCardsContainer.innerHTML += `<div class="card  max-h-[19em] h-[16em] min-w-[8em] w-[10em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
    <div class="relative  flex-col text-center">
        <div class="absolute top-4 flex items-centertext-black font-bold flex-col"><p>${arrayOfReserve[l].position}</p><p>${arrayOfReserve[l].rating}</p></div>
        <img src="${arrayOfReserve[l].photo}" alt="" class="w-[7em]">
    </div>
    <h2 class="pb-1 font-bold text-[0.9em] text-black ">${arrayOfReserve[l].name}</h2>
    <div class=" w-[13em] flex text-center text-[10px] font-bold text-[#000000c0]">
        <p class="px-[1px]">PAC ${arrayOfReserveer.pace}</p>
        <p class="px-[1px]">SHO ${arrayOfReserveer.shooting}</p>
        <p class="px-[1px]">PAS ${arrayOfReserveer.passing}</p>
        <p class="px-[1px]">DRI ${arrayOfReserveer.dribbling}</p>
        <p class="px-[1px]">DEF ${arrayOfReserveer.defending}</p>
        <p class="px-[1px]">PHY ${arrayOfReserveer.physical}</p>
    </div>
    <div class="flex  w-[3em] justify-between p-1">
        <img src="${arrayOfReserve[l].flag}" alt="" class="w-[1.2em]">
        <img src="${arrayOfReserve[l].logo}" alt="" class="w-[1em]">
    </div>
    <div class='bx bx-add-to-queue text-black p-1' onclick="addPlayer(${i})"></div>
</div>`
    }
//     for (let i = 0; i < dataLength; i++) {


//     if(arrayOfReserveer[i].position != "GK")
//     {
//         reserveCardsContainer.innerHTML += `
//         <div class="card  max-h-[19em] h-[16em] min-w-[8em] w-[10em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
//     <div class="relative  flex-col text-center">
//         <div class="absolute top-4 flex items-centertext-black font-bold flex-col"><p>${arrayOfReserve[i].position}</p><p>${arrayOfReserve[i].rating}</p></div>
//         <img src="${arrayOfReserve[i].photo}" alt="" class="w-[7em]">
//     </div>
//     <h2 class="pb-1 font-bold text-[0.9em] text-black">${arrayOfReserve[i].name}</h2>
//     <div class=" w-[13em] flex text-center text-[10px] font-bold text-[#000000c0]">
//         <p class="px-[1px]">PAC ${arrayOfReserve[i].pace}</p>
//         <p class="px-[1px]">SHO ${arrayOfReserve[i].shooting}</p>
//         <p class="px-[1px]">PAS ${arrayOfReserve[i].passing}</p>
//         <p class="px-[1px]">DRI ${arrayOfReserve[i].dribbling}</p>
//         <p class="px-[1px]">DEF ${arrayOfReserve[i].defending}</p>
//         <p class="px-[1px]">PHY ${arrayOfReserve[i].physical}</p>
//     </div>
//     <div class="flex  w-[3em] justify-between p-1">
//         <img src="${arrayOfReserve[i].flag}" alt="" class="w-[1.2em]">
//         <img src="${arrayOfReserve[i].logo}" alt="" class="w-[1em]">
//     </div>
//         <div class='bx bx-add-to-queue text-black p-1' onclick="addPlayer(${i})"></div>

// </div>
// `
//     }
//     else{
//         reserveCardsContainer.innerHTML += `
//         <div class="card  max-h-[19em] h-[16em] min-w-[8em] w-[10em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
//     <div class="relative  flex-col text-center">
//         <div class="absolute top-4 flex items-centertext-black font-bold flex-col"><p>${arrayOfReserve[i].position}</p><p>${arrayOfReserve[i].rating}</p></div>
//         <img src="${arrayOfReserve[i].photo}" alt="" class="w-[7em]">
//     </div>
//     <h2 class="pb-1 font-bold text-[0.9em] text-black ">${arrayOfReserve[i].name}</h2>
//     <div class=" w-[13em] flex text-center text-[10px] font-bold text-[#000000c0]">
//         <p class="px-[1px]">DIV ${arrayOfReserve[i].diving}</p>
//         <p class="px-[1px]">HAN ${arrayOfReserve[i].handling}</p>
//         <p class="px-[1px]">KIC ${arrayOfReserve[i].kicking}</p>
//         <p class="px-[1px]">REF ${arrayOfReserve[i].reflexes}</p>
//         <p class="px-[1px]">SPE ${arrayOfReserve[i].speed}</p>
//         <p class="px-[1px]">POS ${arrayOfReserve[i].positioning}</p>
//     </div>
//     <div class="flex  w-[3em] justify-between p-1">
//         <img src="${arrayOfReserve[i].flag}" alt="" class="w-[1.2em]">
//         <img src="${arrayOfReserve[i].logo}" alt="" class="w-[1em]">
//     </div>
//     <div class='bx bx-add-to-queue text-black p-1' onclick="addPlayer(${i})"></div>
// </div>
// `
//     }
 
//     }
}
afficherReserve()