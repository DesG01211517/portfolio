let allElms = [
    redScoot, blackScoot, blueScoot, grayScoot
]
blackScoot.onclick = function () {
    blackScoot.textContent = "RESERVED";
    alert("You clicked the Rent Me button!");}
redScoot.onclick = function () {
    redScoot.textContent = "RESERVED";
    alert("You clicked the Rent Me button!");}
blueScoot.onclick = function () {
    blueScoot.textContent = "RESERVED";
    alert("You clicked the Rent Me button!");}
grayScoot.onclick = function () {
    grayScoot.textContent = "RESERVED";
    alert("You clicked the Rent Me button!");}
resetButton.onclick = function () {
    for (let i=0; i<4; i++) {
        let a = allElms[i];
        a.textContent = "RENT ME!!";
    }
}








