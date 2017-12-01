
var buttonCount = document.querySelectorAll("button").length;
for (var i = 0; i <= buttonCount; i++) {
    var buttonText = document.getElementsByClassName("button");
    alert(buttonText[i].innerText);
}

