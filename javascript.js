

function firstPassword() {
    let answer = document.getElementById("password").value;
    let message = document.getElementById("message");
    let riddle = document.getElementById("riddle");
    let passwordContainer = document.getElementById("password-container");
    let itinerary = document.getElementById("itinerary");
    let itineraryShow = document.getElementById("itinerary-show");
    const image = document.createElement('img');
    image.src  = 'https://i.postimg.cc/QCv8Ln7T/IMG-1107.jpg';
    image.id = 'image';
    const lastImage = document.createElement('img');
    lastImage.src = "https://i.postimg.cc/c4CfMKTg/pastiche.jpg";
    lastImage.id = "last-image";
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
        itineraryShow.id = "itinerary";
        message.textContent = "";
        riddle.textContent = "There's one more riddle, but it's not here... it's beneath one of these things: ";
    }
    else {
        message.textContent = "Incorrect. Try again...";
    }
}