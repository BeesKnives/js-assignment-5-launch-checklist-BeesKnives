// Write your helper functions here!

// require('isomorphic-fetch');


   


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   
    
    
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${document.name}</li>
        <li>Diameter: ${document.diameter}</li>
        <li>Star: ${document.star}</li>
        <li>Distance from Earth: ${document.distance}</li>
        <li>Number of Moons: ${document.moons}</li>
    </ol>
    <img src="${document.image}">
    `
}












    function validateInput(input) {
        if (input === ""){
             return "Empty"
        }
        if (isNaN(input)){
            return "Not a Number"
        }
        if (!isNaN(input)){
            return "Is a Number"
        }
        //validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate
    }
    
    
    

    




    function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
        
        let chosenPilot = document.querySelector(`input[name = ${pilot}]`)
        let chosenCopilot = document.querySelector(`input[name = ${copilot}]`)
        let chosenFuelLevel = document.querySelector(`input[name = ${fuelLevel}]`)
        let chosenCargoMass = document.querySelector(`input[name = ${cargoMass}]`)

        let options = [chosenPilot, chosenCopilot, chosenFuelLevel, chosenCargoMass] //array of options

        function getValue(variable){ return variable.value} // get values from variables
        let optionsValues = options.map(getValue) //get string values for options w/ getValue Function (validate input uses the string value, not the variable itself)

        let optionsReturns = optionsValues.map(validateInput) //pass to validateInput, get array of responses
        

        function alertsCheck(){ 
            if (optionsReturns.includes("Empty")){
                alert("All fields are required.")
            }else if (optionsReturns[0]==="Is a Number"){ //pilot and co-pilot names should be strings
                alert("Pilot Name must be a word.")
            }else if (optionsReturns[1]==="Is a Number"){
                alert("Copilot Name must be a word.")
            }else if (optionsReturns[2]==="Not a Number"){ //fuel level and cargo mass should be numbers
                alert("Fuel Level must be a number.")
            }else if (optionsReturns[3]==="Not a Number"){
                alert("Cargo Mass must be a number.")
            }else{
                return //if no alerts are tripped, return before preventDefault()
            }
            event.preventDefault()
        }
        alertsCheck()
        
        
       

        function updateStatus(){
            pilotStatus.innerHTML = `Pilot ${optionsValues[0]} is Ready`    //update pilot status with selected pilots
            copilotStatus.innerHTML = `Co-pilot ${optionsValues[1]} is Ready`

        
            let fuelReady = false
            let cargoReady = false

            if(Number(optionsValues[2]) < 10000){                           //fuelStatus readyness
                fuelStatus.innerHTML = "There is not enough fuel for the journey."
                fuelReady = false
            } else{
                fuelStatus.innerHTML = "Fuel level high enough for launch."
                fuelReady = true
            }
            
            if(Number(optionsValues[3]) > 10000){                           //cargoStatus readyness
                cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
                cargoReady = false
            } else{
                cargoStatus.innerHTML = "Cargo mass low enough for launch."
                cargoReady = true
            }
            
            
            if (fuelReady === true && cargoReady === true){                 //if shuttle is ready 
                launchStatus.innerHTML = "Shuttle is ready for launch."
                launchStatus.style.color = "green"
                faultyItems.style.visibility = "hidden"
            } else {                                                         //if shuttle isn't ready
                launchStatus.innerHTML = "Shuttle not ready for launch."
                launchStatus.style.color = "red"
                faultyItems.style.visibility = "visible"
            }
        }
        updateStatus()
        
    }










    async function myFetch() {
        let planetsReturned;
        await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            planetsReturned = response.json()
        })
        return planetsReturned; //object array of planet objects
    }


    function pickPlanet(planets) {
        let randomIndex = Math.floor(Math.random()*(planets.length))
        return planets[randomIndex] //object of a planet's info
    }








// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
