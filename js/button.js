

// button.addEventListener("click", function){
    
    
// }

function displayText() {
    // Get the element where the text should be displayed
    const displayArea = document.getElementById('displayArea');

    // Set the text content of the element
    displayArea.innerHTML = "Thank you! We'll contact you soon";
}

document.getElementById('submitbutt').addEventListener('click', displayText)