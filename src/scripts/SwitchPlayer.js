let selectGardienOrJoueur = document.getElementById("selectGardienOrJoueur")
let selectPositionn = document.getElementById("selectPosition");
let divingGk = document.querySelector(".divingGk")
let handlingGk = document.querySelector(".handlingGk")
let kickingGk = document.querySelector(".kickingGk")
let reflexesGk = document.querySelector(".reflexesGk")
let speedGk = document.querySelector(".speedGk")
let positioningGk = document.querySelector(".positioningGk")

function switchPlayer()
{
    selectPositionn.addEventListener("change",()=>
        {

            if(selectPositionn.value == "GK"){
            divingGk.innerHTML = "Diving"
            handlingGk.innerHTML = "Handling"
            kickingGk.innerHTML = "Kicking"
            reflexesGk.innerHTML = "Reflexes"
            speedGk.innerHTML = "Speed"
            positioningGk.innerHTML = "Positioning"}

            
            if(selectPositionn.value != "GK"){
                divingGk.innerHTML = "Pace"
                handlingGk.innerHTML = "Shooting"
                kickingGk.innerHTML = "Passing"
                reflexesGk.innerHTML = "Dribbling"
                speedGk.innerHTML = "Defending"
                positioningGk.innerHTML = "Physical"}
        })


}
switchPlayer()