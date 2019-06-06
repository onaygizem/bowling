// function to reset the score board
function reset() {
    document.getElementById("scoreBoard").reset();
}
// Mapping for html ids
function score() {
    var b1 = parseInt(document.getElementById("1.1").value);
    var b2 = parseInt(document.getElementById("1.2").value);
    var b3 = parseInt(document.getElementById("2.1").value);
    var b4 = parseInt(document.getElementById("2.2").value);
    var b5 = parseInt(document.getElementById("3.1").value);
    var b6 = parseInt(document.getElementById("3.2").value);
    var b7 = parseInt(document.getElementById("4.1").value);
    var b8 = parseInt(document.getElementById("4.2").value);
    var b9 = parseInt(document.getElementById("5.1").value);
    var b10 = parseInt(document.getElementById("5.2").value);
    var b11 = parseInt(document.getElementById("6.1").value);
    var b12 = parseInt(document.getElementById("6.2").value);
    var b13 = parseInt(document.getElementById("7.1").value);
    var b14 = parseInt(document.getElementById("7.2").value);
    var b15 = parseInt(document.getElementById("8.1").value);
    var b16 = parseInt(document.getElementById("8.2").value);
    var b17 = parseInt(document.getElementById("9.1").value);
    var b18 = parseInt(document.getElementById("9.2").value);
    var b19 = parseInt(document.getElementById("10.1").value);
    var b20 = parseInt(document.getElementById("10.2").value);
    var b21 = parseInt(document.getElementById("11.1").value);
    var b22 = parseInt(document.getElementById("11.2").value);
    var b23 = parseInt(document.getElementById("12.1").value);
    var b24 = parseInt(document.getElementById("12.2").value);

    // Array to pass to the bowlingGame function
    var array = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24]

    // filtering out the NaN in case user does not put an input (exp: 10, 0)
    var filtered = array.filter(Boolean);

    console.log(filtered);
    document.getElementById("sum").innerHTML = bowlingGame(filtered)
}



