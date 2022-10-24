

function firstPassword() {
    let answer = document.getElementById("password").value;
    if (answer === "test") {
        window.location.href = "second.html";
    } else {
        document.getElementById("message").textContent = "Incorrect. Try again...";
    }
}

function secondPassword() {
    let answer = document.getElementById("password").value;
    if (answer === "test2") {
        alert("oh yeah");
    } else {
        document.getElementById("message").textContent = "Incorrect. Try again...";
    }
}