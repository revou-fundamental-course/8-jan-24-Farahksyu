function hitung() {
    var squareSide = document.getElementById("squareSide2").value;
    var rumusLuas = squareSide * squareSide;
    document.getElementById("rumusLuasResult").innerHTML = "Luas: " + rumusLuas;
}

function hitung2() {
    var squareSide = document.getElementById("squareSide3").value;
    var rumusKeliling = squareSide * 4;
    document.getElementById("rumusKelilingResult").innerHTML = "Keliling: " + rumusKeliling;
}

function reset() {
	document.getElementById("squareSide2").value = "";
	document.getElementById("squareSide3").value = "";
	document.getElementById("rumusLuasResult").innerHTML = "";
	document.getElementById("rumusKelilingResult").innerHTML = "";
}