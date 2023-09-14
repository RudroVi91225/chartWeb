let count = 0;

document.getElementById("decriseButton").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;


}
document.getElementById("resetButton").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("incriseButton").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}