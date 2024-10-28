function showAlert() {
    var paragraph = document.getElementById("myParagraph");
    var textContent = paragraph.textContent;
    alert(textContent);
}

document.getElementById("alertButton").onclick = showAlert;