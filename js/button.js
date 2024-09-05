


function displayText() {

    const displayArea = document.getElementById('displayArea');

    displayArea.innerHTML = "Thank you! We'll contact you soon";
}

document.getElementById('submitbutt').addEventListener('click', displayText)