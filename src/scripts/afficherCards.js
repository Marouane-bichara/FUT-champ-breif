

let cardLw = document.querySelector('.cardLw');
let cardST = document.querySelector('.cardST');
let cardRW = document.querySelector('.cardRW');

let cardCM1 = document.querySelector('.cardCM1');
let cardCM2 = document.querySelector('.cardCM2');
let cardCM3 = document.querySelector('.cardCM3');

let cardLB = document.querySelector('.cardLB');
let cardRCB1 = document.querySelector('.cardCB1');
let cardRCB2 = document.querySelector('.cardCB2');
let cardRB = document.querySelector('.cardRB');

let cardGK = document.querySelector('.cardGK')

document.addEventListener('DOMContentLoaded', function() {
    afficherPlayersForContainer("arrayOfTop");
    afficherPlayersForContainer("arrayofmedium");
    afficherPlayersForContainer("arrayofdown");
    afficherPlayersForContainer("arrayoflow");
});

function afficherPlayersForContainer(localStorageName) {
    let arrayOfPlayers = JSON.parse(localStorage.getItem(localStorageName)) || [];

    if (arrayOfPlayers.length === 0) {
        return;
    }

   if(localStorageName == "arrayOfTop")
   {


    

    for (let i = 0; i < arrayOfPlayers.length; i++) {
        let statsHTML = '';

        if (arrayOfPlayers[i].position === 'GK') {
            statsHTML = `
                <p class="px-[1px]">DIV ${arrayOfPlayers[i].diving}</p>
                <p class="px-[1px]">HAN ${arrayOfPlayers[i].handling}</p>
                <p class="px-[1px]">KIC ${arrayOfPlayers[i].kicking}</p>
                <p class="px-[1px]">REF ${arrayOfPlayers[i].reflexes}</p>
                <p class="px-[1px]">SPE ${arrayOfPlayers[i].speed}</p>
                <p class="px-[1px]">POS ${arrayOfPlayers[i].positioning}</p>
            `;
        } else {
            statsHTML = `
                <p class="px-[1px]">PAC ${arrayOfPlayers[i].pace}</p>
                <p class="px-[1px]">SHO ${arrayOfPlayers[i].shooting}</p>
                <p class="px-[1px]">PAS ${arrayOfPlayers[i].passing}</p>
                <p class="px-[1px]">DRI ${arrayOfPlayers[i].dribbling}</p>
                <p class="px-[1px]">DEF ${arrayOfPlayers[i].defending}</p>
                <p class="px-[1px]">PHY ${arrayOfPlayers[i].physical}</p>
            `;
        }

        const playerCardHTML = `
            <div class="relative flex-col text-center">
                <div class="absolute top-4 flex items-center text-black font-bold flex-col text-[0.5em]">
                    <p>${arrayOfPlayers[i].position}</p>
                    <p>${arrayOfPlayers[i].rating}</p>
                </div>
                <img src="${arrayOfPlayers[i].photo}" alt="" class="w-[3em] pt-2">
            </div>
            <h2 class="pb-1 font-bold text-[0.5em] text-black">${arrayOfPlayers[i].name}</h2>
            <div class="w-[49em] text-[0.1em] flex text-center font-bold text-[#000000c0] mr-1">
                ${statsHTML}
            </div>
            <div class="flex w-[3em] justify-between p-1">
                <img src="${arrayOfPlayers[i].flag}" alt="" class="w-[0.6em]">
                <img src="${arrayOfPlayers[i].logo}" alt="" class="w-[0.6em]">
            </div>
            <div class="bx bx-checkbox-minus text-black text-[0.7em]" onclick="removePlayer(${i}, '${localStorageName}')"></div>

            
        `;

        if (arrayOfPlayers[i].position === 'RW') {
            cardRW.innerHTML = '';

            cardRW.innerHTML += playerCardHTML;
        } else if (arrayOfPlayers[i].position === 'ST') {
            cardST.innerHTML = '';

            cardST.innerHTML += playerCardHTML;
        } else if (arrayOfPlayers[i].position === 'LW') {
            cardLw.innerHTML = '';

            cardLw.innerHTML += playerCardHTML;
        }
    }
   }






   if(localStorageName == "arrayofmedium")
    {
        cardCM1.innerHTML = '';
        cardCM2.innerHTML = '';
        cardCM3.innerHTML = '';
 
        let cmIndex = 0;
     
 
     for (let i = 0; i < arrayOfPlayers.length; i++) {
         let statsHTML = '';
 
         if (arrayOfPlayers[i].position === 'GK') {
             statsHTML = `
                 <p class="px-[1px]">DIV ${arrayOfPlayers[i].diving}</p>
                 <p class="px-[1px]">HAN ${arrayOfPlayers[i].handling}</p>
                 <p class="px-[1px]">KIC ${arrayOfPlayers[i].kicking}</p>
                 <p class="px-[1px]">REF ${arrayOfPlayers[i].reflexes}</p>
                 <p class="px-[1px]">SPE ${arrayOfPlayers[i].speed}</p>
                 <p class="px-[1px]">POS ${arrayOfPlayers[i].positioning}</p>
             `;
         } else {
             statsHTML = `
                 <p class="px-[1px]">PAC ${arrayOfPlayers[i].pace}</p>
                 <p class="px-[1px]">SHO ${arrayOfPlayers[i].shooting}</p>
                 <p class="px-[1px]">PAS ${arrayOfPlayers[i].passing}</p>
                 <p class="px-[1px]">DRI ${arrayOfPlayers[i].dribbling}</p>
                 <p class="px-[1px]">DEF ${arrayOfPlayers[i].defending}</p>
                 <p class="px-[1px]">PHY ${arrayOfPlayers[i].physical}</p>
             `;
         }
 
         const playerCardHTML = `
             <div class="relative flex-col text-center">
                 <div class="absolute top-4 flex items-center text-black font-bold flex-col text-[0.5em]">
                     <p>${arrayOfPlayers[i].position}</p>
                     <p>${arrayOfPlayers[i].rating}</p>
                 </div>
                 <img src="${arrayOfPlayers[i].photo}" alt="" class="w-[3em] pt-2">
             </div>
             <h2 class="pb-1 font-bold text-[0.5em] text-black">${arrayOfPlayers[i].name}</h2>
             <div class="w-[49em] text-[0.1em] flex text-center font-bold text-[#000000c0] mr-1">
                 ${statsHTML}
             </div>
             <div class="flex w-[3em] justify-between p-1">
                 <img src="${arrayOfPlayers[i].flag}" alt="" class="w-[0.6em]">
                 <img src="${arrayOfPlayers[i].logo}" alt="" class="w-[0.6em]">
             </div>
             <div class="bx bx-checkbox-minus text-black text-[0.7em]" onclick="removePlayer(${i}, '${localStorageName}')"></div>
 
             
         `;
 
  
        


         if (arrayOfPlayers[i].position === 'CM') {
            if (cmIndex === 0) {
                cardCM1.innerHTML += playerCardHTML;
            } else if (cmIndex === 1) {
                cardCM2.innerHTML += playerCardHTML;
            } else {
                cardCM3.innerHTML += playerCardHTML;
            }
            cmIndex = (cmIndex + 1) % 3; 
        }
     }
    }





    if(localStorageName == "arrayofdown")
        {
     
     
         
     cmIndex2 = 0
         for (let i = 0; i < arrayOfPlayers.length; i++) {
             let statsHTML = '';
     
             if (arrayOfPlayers[i].position === 'GK') {
                 statsHTML = `
                     <p class="px-[1px]">DIV ${arrayOfPlayers[i].diving}</p>
                     <p class="px-[1px]">HAN ${arrayOfPlayers[i].handling}</p>
                     <p class="px-[1px]">KIC ${arrayOfPlayers[i].kicking}</p>
                     <p class="px-[1px]">REF ${arrayOfPlayers[i].reflexes}</p>
                     <p class="px-[1px]">SPE ${arrayOfPlayers[i].speed}</p>
                     <p class="px-[1px]">POS ${arrayOfPlayers[i].positioning}</p>
                 `;
             } else {
                 statsHTML = `
                     <p class="px-[1px]">PAC ${arrayOfPlayers[i].pace}</p>
                     <p class="px-[1px]">SHO ${arrayOfPlayers[i].shooting}</p>
                     <p class="px-[1px]">PAS ${arrayOfPlayers[i].passing}</p>
                     <p class="px-[1px]">DRI ${arrayOfPlayers[i].dribbling}</p>
                     <p class="px-[1px]">DEF ${arrayOfPlayers[i].defending}</p>
                     <p class="px-[1px]">PHY ${arrayOfPlayers[i].physical}</p>
                 `;
             }
     
             const playerCardHTML = `
                 <div class="relative flex-col text-center">
                     <div class="absolute top-4 flex items-center text-black font-bold flex-col text-[0.5em]">
                         <p>${arrayOfPlayers[i].position}</p>
                         <p>${arrayOfPlayers[i].rating}</p>
                     </div>
                     <img src="${arrayOfPlayers[i].photo}" alt="" class="w-[3em] pt-2">
                 </div>
                 <h2 class="pb-1 font-bold text-[0.5em] text-black">${arrayOfPlayers[i].name}</h2>
                 <div class="w-[49em] text-[0.1em] flex text-center font-bold text-[#000000c0] mr-1">
                     ${statsHTML}
                 </div>
                 <div class="flex w-[3em] justify-between p-1">
                     <img src="${arrayOfPlayers[i].flag}" alt="" class="w-[0.6em]">
                     <img src="${arrayOfPlayers[i].logo}" alt="" class="w-[0.6em]">
                 </div>
                 <div class="bx bx-checkbox-minus text-black text-[0.7em]" onclick="removePlayer(${i}, '${localStorageName}')"></div>
     
                 
             `;

             if (arrayOfPlayers[i].position === 'LB') {
                cardLB.innerHTML = '';
                 cardLB.innerHTML += playerCardHTML;
             } else if (arrayOfPlayers[i].position === 'CB') {
                if(cmIndex2 == 0)
                {
                cardRCB1.innerHTML = '';
                 cardRCB1.innerHTML += playerCardHTML;}
                 if(cmIndex2 == 1)
                 {
                    cardRCB2.innerHTML = '';
                    cardRCB2.innerHTML += playerCardHTML;
                 }
                 cmIndex2 = (cmIndex2 + 1) % 2; 
             }
             
             else if (arrayOfPlayers[i].position === 'RB') {
                cardRB.innerHTML = '';
                 cardRB.innerHTML += playerCardHTML;
             }
         }
        }



        if(localStorageName == "arrayoflow")
        {
            for (let i = 0; i < arrayOfPlayers.length; i++) {
                let statsHTML = '';
        
                if (arrayOfPlayers[i].position === 'GK') {
                    statsHTML = `
                        <p class="px-[1px]">DIV ${arrayOfPlayers[i].diving}</p>
                        <p class="px-[1px]">HAN ${arrayOfPlayers[i].handling}</p>
                        <p class="px-[1px]">KIC ${arrayOfPlayers[i].kicking}</p>
                        <p class="px-[1px]">REF ${arrayOfPlayers[i].reflexes}</p>
                        <p class="px-[1px]">SPE ${arrayOfPlayers[i].speed}</p>
                        <p class="px-[1px]">POS ${arrayOfPlayers[i].positioning}</p>
                    `;
                } else {
                    statsHTML = `
                        <p class="px-[1px]">PAC ${arrayOfPlayers[i].pace}</p>
                        <p class="px-[1px]">SHO ${arrayOfPlayers[i].shooting}</p>
                        <p class="px-[1px]">PAS ${arrayOfPlayers[i].passing}</p>
                        <p class="px-[1px]">DRI ${arrayOfPlayers[i].dribbling}</p>
                        <p class="px-[1px]">DEF ${arrayOfPlayers[i].defending}</p>
                        <p class="px-[1px]">PHY ${arrayOfPlayers[i].physical}</p>
                    `;
                }
        
                const playerCardHTML = `
                    <div class="relative flex-col text-center">
                        <div class="absolute top-4 flex items-center text-black font-bold flex-col text-[0.5em]">
                            <p>${arrayOfPlayers[i].position}</p>
                            <p>${arrayOfPlayers[i].rating}</p>
                        </div>
                        <img src="${arrayOfPlayers[i].photo}" alt="" class="w-[3em] pt-2">
                    </div>
                    <h2 class="pb-1 font-bold text-[0.5em] text-black">${arrayOfPlayers[i].name}</h2>
                    <div class="w-[49em] text-[0.1em] flex text-center font-bold text-[#000000c0] mr-1">
                        ${statsHTML}
                    </div>
                    <div class="flex w-[3em] justify-between p-1">
                        <img src="${arrayOfPlayers[i].flag}" alt="" class="w-[0.6em]">
                        <img src="${arrayOfPlayers[i].logo}" alt="" class="w-[0.6em]">
                    </div>
                    <div class="bx bx-checkbox-minus text-black text-[0.7em]" onclick="removePlayer(${i}, '${localStorageName}')"></div>
        
                    
                `;
   
                if (arrayOfPlayers[i].position === 'GK') {
                    cardGK.innerHTML = '';
                    cardGK.innerHTML += playerCardHTML;
                }
            }  
        }


}

function removePlayer(index, localStorageName) {
    let arrayOfPlayers = JSON.parse(localStorage.getItem(localStorageName));
    if (arrayOfPlayers && arrayOfPlayers[index]) {
        arrayOfPlayers.splice(index, 1); 
        localStorage.setItem(localStorageName, JSON.stringify(arrayOfPlayers)); 
        location.reload(); 
    }
}
