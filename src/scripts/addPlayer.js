let btnAddPlayer = document.querySelector(".btnAddPlayer")
let allinputs = document.querySelectorAll(".allinputs")
let fullNameInput = document.getElementById("fullNameInput");
let nationaliteInput = document.getElementById("nationaliteInput");
let selectPosition = document.getElementById("selectPosition")
let errorMessage = document.querySelector(".errorMessage");
let noteGlobale = document.getElementById("noteGlobale");
let selectGardienOrJoueurr = document.getElementById("selectGardienOrJoueur")

let arrayOfInputs = Array.from(allinputs)


function validationDeForm()
{   



}


function addNewPlayer()
{
    btnAddPlayer.addEventListener('click' , ()=>
        {
            if(fullNameInput.value.length > 16 || nationaliteInput.value.length > 16)
                {
                    errorMessage.value = ''
                    errorMessage.textContent = `Inputs must be between 0 and 15`
                    return
                }
                for (let l = 0; l < arrayOfInputs.length; l++) {
                    if(arrayOfInputs[l].value == "")
                    {
                        
                        errorMessage.textContent = `All Fields Required`
                        return
                    }
                }
                for (let l = 0; l < arrayOfInputs.length; l++) {
                    if(arrayOfInputs[l].value != "")
                    {
                        errorMessage.innerHTML = ``
                    }
                }
                if(noteGlobale.value > 99)
                {
                    errorMessage.textContent = `Number of note Globbale too high`
                    return
                }
                if(selectPosition.value == "")
                {
                    errorMessage.textContent = `Position is empty`
                    return
                }
                if(arrayOfInputs[7].value > 99 || arrayOfInputs[8].value > 99 ||arrayOfInputs[9].value > 99 || arrayOfInputs[10].value > 99 || arrayOfInputs[11].value > 99 || arrayOfInputs[12].value > 99)
                {
                    errorMessage.textContent = `Number of thos inputs must be between 0 & 99`
                    return 
                }
        let obj = {};


        if(selectPosition.value != "GK")
        {
            obj = {
                name: arrayOfInputs[0].value,
                photo: arrayOfInputs[1].value,
                nationality: arrayOfInputs[2].value,
                flag: arrayOfInputs[3].value,
                club: arrayOfInputs[4].value,
                logo: arrayOfInputs[5].value,
                rating: arrayOfInputs[6].value,
                pace: arrayOfInputs[7].value,
                shooting: arrayOfInputs[8].value,
                passing: arrayOfInputs[9].value,
                dribbling: arrayOfInputs[10].value,
                defending: arrayOfInputs[11].value,
                physical: arrayOfInputs[12].value,
                position: selectPosition.value
            };
        }else if(selectPosition.value == "GK")
        {
            obj = {
                name: arrayOfInputs[0].value,
                photo: arrayOfInputs[1].value,
                nationality: arrayOfInputs[2].value,
                flag: arrayOfInputs[3].value,
                club: arrayOfInputs[4].value,
                logo: arrayOfInputs[5].value,
                rating: arrayOfInputs[6].value,
                diving: arrayOfInputs[7].value,
                handling: arrayOfInputs[8].value,
                kicking: arrayOfInputs[9].value,
                reflexes: arrayOfInputs[10].value,
                speed: arrayOfInputs[11].value,
                positioning: arrayOfInputs[12].value,
                position: selectPosition.value
            };
        }

        // } else {
        //     // Handle case where no player type is selected (optional)
        //     errorMessage.textContent = 'Please select a player type (Gardien or Champ)';
        //     return;
        // }


             let dataoflocalstorage = JSON.parse(localStorage.getItem("newdata")) || [];
             let founduser = 0
            for (let m = 0; m < dataoflocalstorage.players.length; m++) {
                if(dataoflocalstorage.players[m].name == obj.name || dataoflocalstorage.players[m].photo == obj.photo)
                {
                    errorMessage.textContent = `User Exist`
                    return
                }
            }
            if(!founduser)
            {
                dataoflocalstorage.players.push(obj)
            
                localStorage.setItem("newdata" , JSON.stringify(dataoflocalstorage))
                location.reload()
            }

        })
}

addNewPlayer()