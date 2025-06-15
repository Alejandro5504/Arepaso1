const NUMERO = (document.getElementById("numeros"));

function calcular() {

    let numero = parseInt(NUMERO.value);

    if (numero === 0) {

        document.getElementById("resultado").innerHTML = "Te corresponden 0 dias";


    } else if (numero > 6) {

        document.getElementById("resultado").innerHTML = "A mi no me la das con queso";



    } else if (numero === 1) {

        document.getElementById("resultado").innerHTML = "Te corresponden 5 dias";


    } else if (numero === 2) {

        document.getElementById("resultado").innerHTML = "Te corresponden 12 dias";


    } else if (numero === 3) {

        document.getElementById("resultado").innerHTML = "Te corresponden 17 dias";


    } else if (numero === 4) {

        document.getElementById("resultado").innerHTML = "Te corresponden 22 dias";


    } else if (numero === 5) {

        document.getElementById("resultado").innerHTML = "Te corresponden 27 dias";


    } else if (numero === 6) {

        document.getElementById("resultado").innerHTML = "Te corresponden 32 dias";

    }


}