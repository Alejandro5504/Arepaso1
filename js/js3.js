function calcular() {

    let entrada = document.getElementById("numero").value; //inicialmente se uso parseInt, pero chatgpt recomiendo no usar type number cuando son cadenas de numeros asi que se eliminan ambas

    console.log(entrada);

    //gracias a chat gpt sabemos que el metodo split divide cadenas y als combierte en strings Y el razonamiento sigue siendo primero introducir numeros almacenarlos y hacer el string

    let numeros = entrada.split(",");

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {


        let numStr = numeros[i].trim(); // Quita espacios
        let num = parseFloat(numStr); // Convierte a número

        if (!isNaN(num)) {
            suma += num; // Suma si es válido
        } else {
            console.warn("Valor inválido ignorado:", numStr);
        }
    }

    // Mostrar resultado en pantalla
    document.getElementById("respuesta").textContent = "La suma es: " + suma;


}


