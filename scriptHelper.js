// Write your helper functions here!

// require('isomorphic-fetch');

window.addEventListener("load", function(){
    alert("tdyujdhfg")
    let form = document.querySelector("#formSubmit")
    this.alert("ggggggg")
    form.addEventListener("submit", function(event){
        window.preventDefault();
        alert("aaaaaaa")

        let chosenPilot = document.querySelector("input[name = pilotName]")
        let chosenCopilot = document.querySelector("input[name = copilotName]")
        let chosenFuelLevel = document.querySelector("input [name = fuelLevel]")
        let chosenCargoMass = document.querySelector("input[name = cargoMass]")

        let options = [chosenPilot, chosenCopilot, chosenFuelLevel, chosenCargoMass]
        //pass to formSubmission
        alert("SDFGHJKL")
    

    })
})

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}
console.log(2)
function validateInput(testInput) {
alert(1)
    
            //pass to formSubmission

            if (options.includes("")){
                alert("All fields are required!")
                event.preventDefault()
            }else{
                alert(">:(")
            }


        }
    

    // pilotName, copilotName, fuelLevel, cargoMass

    //The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers
    //validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //put load listener here
   //call validateInput and pass info to it
   //
   
   
    //use validateInput() to complete the formSubmission() function. formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. 
    //Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below. Make sure to call your formSubmission() function at the appropriate time in your script.js file!
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
