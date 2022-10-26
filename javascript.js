

function firstPassword() {
    let answer = document.getElementById("password").value;
    let message = document.getElementById("message");
    let riddle = document.getElementById("riddle");
    let passwordContainer = document.getElementById("password-container");
    let itinerary = document.getElementById("itinerary");
    const image = document.createElement('img');
    image.src  = 'https://freeimage.host/i/DsSutf';
    image.id = 'image';
    if (answer === "calendar") {
        document.querySelector('.main-container').appendChild(image);
        riddle.textContent = "ENTER THE NUMERIC CODE";
        message.textContent = "";
    } else if (answer === "3510"){  
        alert("Very well! Now if you want to escape you need to answer some riddles");
        document.getElementById('image').style.display="none";
        message.textContent = ""; 
        riddle.textContent = "Which word in the dictionary is spelled incorrectly?";
    } else if (answer === "incorrectly") {
        alert("Almost got you there! Let's continue...");
        message.textContent = "";
        riddle.textContent = "John's mother has 5 children. their names are March, April, May, June, and _______?";
    } else if (answer === "john" || answer === "John") {
        alert("Great... you might deserve escaping...");
        riddle.textContent = "";
        message.textContent = "";
        itinerary.id = "itinerary-show";
    } else if (answer === "death" || answer === "DEATH") {
        alert("Lucky...");
        message.textContent = "";
        itinerary.id = "itinerary";
        riddle.textContent = "There's one more riddle, but it's not here... it's in one of these places: ";
    }
    else {
        message.textContent = "Incorrect. Try again...";
    }
}