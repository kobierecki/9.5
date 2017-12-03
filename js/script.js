
var buttonCount = document.querySelectorAll("button").length;
var buttonArray = document.getElementsByClassName("button");
for (var i = 0; i <= buttonCount; i++) {  
    alert(buttonArray[i].innerText);
}

