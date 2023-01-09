var name = prompt("Qual o nome do piloto? ");
var velocidadeInicial = 0;

velocidadeInicial = prompt("A que velocidade gostaria de acelerar a nave? ");

confirm("Tem certeza que quer ir para a velocidade "+ velocidadeInicial+ " km/h? ");

if (velocidadeInicial < 0) {
    console.log ("Nave está parada. Considere partir e aumentar a velocidade");
    } else {
         if (velocidadeInicial <40 ) {
         console.log ("Você está devagar, podemos aumentar mais")

             } else {
                if (velocidadeInicial >= 40 && velocidadeInicial <80) {
                console.log ("Parece uma boa velocidade para manter")
                     } else {
                          if (velocidadeInicial >= 80 && velocidadeInicial <100) {
                          console.log ("Velocidade alta. Considere diminuir.")
                              } else {
                                  if (velocidadeInicial >= 100) {
                                   console.log ("Velocidade perigosa. Controle automático forçado")
                                                                }               
                                     }
                            }
                    } 
             }

alert ("O nome do(a) piloto é " +name+ " e a velocidade atual é "+velocidadeInicial+" km/h")