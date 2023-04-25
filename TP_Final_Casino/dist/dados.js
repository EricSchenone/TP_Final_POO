var readlineSync = require("readline-sync");
var nombreUsuario = readlineSync.question('¿ Puedo tener su nombre?  ');
console.log(" Hola ".concat(nombreUsuario, " !!! "));
if (readlineSync.keyInYN("¿Queres jugar dados?, presiona Y para jugar o N para salir")) {
    console.log("Bienvenido a Dados");
}
else {
    console.log("Gracias por visitarnos...!!");
}
var pregunta = "Para tirar los dados y empezar a jugar, presione cualquier tecla...";
readlineSync.keyInPause(pregunta);
var dados = new Array(2);
function tirarDados() {
    for (var i = 0; i < dados.length; i++) {
        dados[i] = Math.floor(Math.random() * 6) + 1;
    }
    return dados;
}
console.log(tirarDados());
console.log("\uD83C\uDF89\uD83C\uDF8A\u2728\uD83C\uDF89\uD83C\uDF8A\u2728\uD83C\uDF89\uD83C\uDF8A\u2728\uD83C\uDF89\uD83C\uDF8A\u2728\uD83C\uDF89\uD83C\uDF8A\u2728\uD83C\uDF89\n     ========================================\n              Ha ganado....!!!!!!\n              $1000000000000000\n     ========================================\n     \uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0\uD83D\uDCB8\uD83D\uDCB0");
