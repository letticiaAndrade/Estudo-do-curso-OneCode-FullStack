var nome = prompt("Qual o nome da nave? ");
var nomeInvertido = "";
for ( var i = nome.length - 1; i>= 0; i--  ) {
    if (nome[i] == "e" ) {
        break;
    }
    nomeInvertido += nome[i];
}
alert ("Nome original é: " + nome + "\nE o nome após a ocultação e invertido é: " +nomeInvertido);