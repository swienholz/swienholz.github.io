addEventListener("desiteload", async function (event) {
    desiteAPI.selectionChangedByDomain.connect(displaySensorData);
    // to do call creatingmaterial (ask susi) ...
});

async function displaySensorData() {
    try {
        // Retrieve selected geometry objects
        const selectObject = await desiteAPI.getSelectedElements('geometry');

        // Locate the image1 element to insert content before it
        const imageElement = document.querySelector("img.image");

        if (selectObject.length === 0) {
            // Show a message before the image if no object is selected
            const errorMessage = document.createElement("p");
            errorMessage.style.color = "red";
            errorMessage.innerText = "No object selected.";
            imageElement.insertAdjacentElement("beforebegin", errorMessage);
            return;
        }

        // Fetch the property value cpName
        const cpName = await desiteAPI.getPropertyValue(selectObject[0], 'cpName', 'xs:string');
        if (!cpName) {
            // Show an error message if cpName is missing
            const errorMessage = document.createElement("p");
            errorMessage.style.color = "red";
            errorMessage.innerText = "Selected object has no cpName property.";
            imageElement.insertAdjacentElement("beforebegin", errorMessage);
            return;
        }

        document.getElementById('SensorID').src = "../desite.modules/sensors/"+cpName+".html"
        console.log(document.getElementById('SensorID').src)

    } catch (error) {
        console.error("Error processing selection:", error);
        alert("An error occurred. Check the console for details.");
    }
}
