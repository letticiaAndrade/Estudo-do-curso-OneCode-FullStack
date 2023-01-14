nome = prompt ("Qual o nome da nave? ")
dobraCont = 0;

dobraEspacial = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não");

while (dobraEspacial == 1) {
    dobraEspacial = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não");
    dobraCont ++;
}

alert("O nome da nave é "+ nome + " e o número de vezes seguidos que a dobra espacial foi realizada é " +dobraCont);