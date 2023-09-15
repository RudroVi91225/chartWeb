document.getElementById("submitbtn").onclick = function () {


    if (document.getElementById("cbutton").checked) {
        temp = document.getElementById("checkbox").value
        temp = Number(temp);
        temp = toCelcious(temp);
        document.getElementById("showLabel").innerHTML = temp;

    }
    else if (document.getElementById("fbutton").checked) {
        temp = document.getElementById("checkbox").value
        temp = Number(temp);
        temp = toFarenhite(temp);
        document.getElementById("showLabel").innerHTML = temp;
    }
    else {
        document.getElementById("showLabel").innerHTML = 'Please Select one'
    }

}

function toCelcious(temp) {
    return (temp - 32) * (5 / 9);
}

function toFarenhite(temp) {
    return temp * 9 / 5 + 32;
}


