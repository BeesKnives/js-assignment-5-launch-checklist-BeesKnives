



window.addEventListener("load", function() {

    let form = document.querySelector("form") //button, call formSubmission
    form.addEventListener("submit", function(event){
        event.preventDefault();
        formSubmission(document, "pilotName", "copilotName", "fuelLevel", "cargoMass")
    })

    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(pickPlanet(listedPlanets))

    })
   
});
