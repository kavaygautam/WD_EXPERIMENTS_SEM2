const heading = document.getElementById("heading");
const input = document.getElementById("textInput");
const paragraph = document.getElementById("paragraph");
const container = document.querySelector(".container");

let currentFontSize = 18;
let backgroundChanged = false;

// Change Heading
document.getElementById("changeHeading").addEventListener("click", function () {
    if (input.value.trim() !== "") {
        heading.textContent = input.value;
    } else {
        alert("Please enter heading text");
    }
});

// Change Background
document.getElementById("changeBackground").addEventListener("click", function () {
    if (!backgroundChanged) {
        container.style.backgroundColor = "#ffe6f2";
        backgroundChanged = true;
    } else {
        container.style.backgroundColor = "white";
        backgroundChanged = false;
    }
});

// Increase Font Size
document.getElementById("increaseFont").addEventListener("click", function () {
    currentFontSize += 2;
    paragraph.style.fontSize = currentFontSize + "px";
});

// Show/Hide Paragraph
document.getElementById("toggleParagraph").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset Page
document.getElementById("resetPage").addEventListener("click", function () {
    heading.textContent = "Welcome to JavaScript Lab";
    input.value = "";
    paragraph.style.display = "block";
    currentFontSize = 18;
    paragraph.style.fontSize = "18px";
    container.style.backgroundColor = "white";
    backgroundChanged = false;
});
