let topContainer = document.querySelector(".topContainer");
let meduimContainer = document.querySelector(".meduimContainer");
let downContainer = document.querySelector(".downContainer");
let lowcontainer = document.querySelector(".lowcontainer");



function afficherplayers()
{
    let  arrayOfPlayerss = JSON.parse(localStorage.getItem("arrayOfPlayers")) || []
//     if(arrayOfPlayerss.length > 0){
//         topContainer.innerHTML = ''
//         console.log(arrayOfPlayerss[0].name);
        
//     for (let i = 0; i < arrayOfPlayerss.length; i++) {
//   if(arrayOfPlayerss[i].position == "RW" || arrayOfPlayerss[i].position == "ST" || arrayOfPlayerss[i].position == "LW")
//   {
//     topContainer.innerHTML += `
//     <div class="card  max-h-[10em] h-[8em] min-w-[5em] w-[4em] bg-[url('../src/images/badge_gold.webp')] bg-cover bg-center flex flex-col justify-center items-center rounded-[7px]  m-3 cursor-pointer">
// <div class="relative  flex-col text-center">
// <div class="absolute top-4 flex items-centertext-black font-bold flex-col text-[0.5em]"><p>${arrayOfPlayerss[i].position}</p><p>${arrayOfPlayerss[i].rating}</p></div>
// <img src="${arrayOfPlayerss[i].photo}" alt="" class="w-[3em]">
// </div>
// <h2 class="pb-1 font-bold text-[0.5em]  text-black">${arrayOfPlayerss[i].name}</h2>
// <div class=" w-[13em] text-[0.2em] flex text-center  font-bold text-[#000000c0]">
// <p class="px-[1px]">PAC ${arrayOfPlayerss[i].pace}</p>
// <p class="px-[1px]">SHO ${arrayOfPlayerss[i].shooting}</p>
// <p class="px-[1px]">PAS ${arrayOfPlayerss[i].passing}</p>
// <p class="px-[1px]">DRI ${arrayOfPlayerss[i].dribbling}</p>
// <p class="px-[1px]">DEF ${arrayOfPlayerss[i].defending}</p>
// <p class="px-[1px]">PHY ${arrayOfPlayerss[i].physical}</p>
// </div>
// <div class="flex  w-[3em] justify-between p-1">
// <img src="${arrayOfPlayerss[i].flag}" alt="" class="w-[0.8em]">
// <img src="${arrayOfPlayerss[i].logo}" alt="" class="w-[0.8em]">
// </div>
// <div class='bx bx-add-to-queue text-black p-1' onclick="addPlayer(${i})"></div>

// </div>
// `
//   }
//     }
//     }
}


























afficherplayers()