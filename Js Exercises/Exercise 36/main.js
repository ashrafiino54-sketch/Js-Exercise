const color = document.querySelector("#color");
const previewColor = document.querySelector("#previewColor");
const colorCode = document.querySelector("#colorCode");
const clearHistory = document.querySelector("#clearHistory");

color.addEventListener("change", function () {
     previewColor.style.backgroundColor = color.value;
     colorCode.innerHTML += `<span style="color: ${color.value};">${color.value}</span><br>`;
});

clearHistory.addEventListener("click", function () {

    colorCode.innerHTML = "";

});