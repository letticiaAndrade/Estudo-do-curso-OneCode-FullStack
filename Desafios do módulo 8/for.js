var nome = prompt ("Qual o nome da nave? ");
var substituirChar = prompt ("Qual caracter deseja substituir? ");
var substitutoChar = prompt ("Por qual caracter deseja substituir? ");
var newNome = "";
for (var pos = 0; pos <nome.length; pos++) {
    if ( nome[pos] == substituirChar ) {
        newNome += substitutoChar

    } else {
        newNome += nome[pos]
    }
}
alert("O novo nome da nave é: "+ newNome);

// o código substitui caracteres do nome da nave que o usuário digitar 