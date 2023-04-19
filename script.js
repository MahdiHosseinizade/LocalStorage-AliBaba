"use strict";

function saveText() {
    const inputText = document.getElementById("inputText").value;
    if (!inputText) {
        alert("Please enter a text");
        return;

    }
    const textArrayStr = localStorage.getItem("textArray");
    let textArray = [];

    if (textArrayStr) {
      textArray = JSON.parse(textArrayStr);
    }
    textArray.push(inputText);
    localStorage.setItem("textArray", JSON.stringify(textArray));
    showText();
    document.getElementById("inputText").value = "";
    // localStorage.clear();
}
  
function showText() {
  const textArray = JSON.parse(localStorage.getItem("textArray")) || [];
  const textList = document.getElementById("text");
  textList.innerHTML = "";
  for (let i = 0; i < textArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = textArray[i];
    li.classList.add("list-item");
    textList.appendChild(li);
  }
}

  
  
showText();
  