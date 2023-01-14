var distanceInlY = prompt("Digite a distância em anos-luz");

var choseOption = prompt("Para qual unidade deseja converter?\n1. Parce (pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km)\n\n (Digite o número da opção desejada)");

var chosenUnity
var convertedDistance

switch (choseOption) {

    case "1" :
        choseOption = "Parsec";
        convertedDistance = distanceInlY * 0.306601;
    case "2" :
        choseOption = "Unidade Astronômica" 
        convertedDistance = distanceInlY * 63241.1; 
    case "3" :
        choseOption = "Quilômetros";
        convertedDistance = distanceInlY * 9.5 * Math.pow (10,12);
        break
    default :
    choseOption = "Unidade não identificada";
    convertedDistance = "Conversão fora do escopo";     
}

alert ("Distância em Anos-luz: " + distanceInlY + "\n" + choseOption+ ":" + convertedDistance);