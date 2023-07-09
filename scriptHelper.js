// Write your helper functions here!

// require('isomorphic-fetch');


   


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
    
    
    

    function getValue(variable){ return variable.value} // get values from variables

    function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
        
       

        let chosenPilot = document.querySelector("input[name = " + pilot + "]")
        let chosenCopilot = document.querySelector("input[name = " + copilot + "]")
        let chosenFuelLevel = document.querySelector("input[name = " + fuelLevel + "]")
        let chosenCargoMass = document.querySelector("input[name = " + cargoMass + "]")

        let options = [chosenPilot, chosenCopilot, chosenFuelLevel, chosenCargoMass] //array of options
        let optionsValues = options.map(getValue) //get values for options

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
            preventDefault()
        }
        alertsCheck()
        
        
        

   

    
        //formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. 
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




// module.exports = {
//     addDestinationInfo: addDestinationInfo,
//     validateInput: validateInput,
//     pickPlanet: pickPlanet,
//     myFetch: myFetch
// }


// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
