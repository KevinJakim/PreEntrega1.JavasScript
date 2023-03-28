// Genera un número aleatorio del 1 al 50 //
const objetivo = Math.floor(Math.random() * 50) + 1;

// Definimos el número de intentos permitidos para adivinar //
const intentosPermitidos = 6;

// Iniciamos el contador de intentos de adivinar //
let intentos = 0;

// Ciclo de adivinanza //

for (let i = 0; i < intentosPermitidos; i++) {
  // El usuario ingresa un número cualquiera //

  const numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 50:"));

  // Verificamos si el número ingresado es igual al número seleccionado al azar //
  if (numeroIngresado === objetivo) {
    alert(`¡Felicitaciones! Adivinaste el número en ${intentos + 1} intentos.`);
    break; // Finaliza el ciclo //
  } else {
    // Pista para el usuario si el número es mayor o menor que el seleccionado //
    const pista = numeroIngresado > objetivo ? "menor" : "mayor";
    alert(`El número que ingresaste es ${pista} que el número objetivo.`);

    // Se incrememnta el contador de intentos //
    intentos++;
  }
}

// Si el usuario no adivinó el número en la cantidad de 6 intentos permitidos, mostramos el numero seleccionado //
if (intentos === intentosPermitidos) {
  alert(`Lo siento, no adivinaste el número en ${intentosPermitidos} intentos. El número objetivo era ${objetivo}.`);
}
