function obtenerIndiceRandom(lista) {
    const random = Math.floor(Math.random() * lista.length);
    return random; //Devolvemos un indice random de la lista
}

function esIgual() {
    console.log("Felicidades ganaste")
    Swal.fire({
        icon: "success",
        title: "Felicidades! Ganaste",
        showConfirmButton: false,
        timer: 5000
      });
      const numero = document.querySelector('.num');
      numero.textContent = listaNumeros[randomIndex];
      numero.style.color= '#d83a3a';
      dato.textContent = listaDatos[randomIndex]; //Imprimimos el dato con el indice devuelto anteriormente de la lsita de datos
      mayoromenor.textContent = "Felicidades! Ganaste"
}
function esMayor() {
    mayoromenor.textContent = "El numero que ingresaste es mayor, elige uno mas chico";
    int--;
}
function esMenor() {
    mayoromenor.textContent = "El numero que ingresaste es menor, elige uno mas grande";
    int--;
}

var int = 10
var listaNumeros = [30,8,10,4,5,20,33,25,3,15]
var listaDatos = ['Encuentra actividades físicas que te motiven y realízalas cuando menos 30 minutos diariamente',
                'Se sugiere que establezcas una rutina a la hora de irte a dormir; intentar descansar al menos 8 horas diarias y alejarte de los aparatos electrónicos, el trabajo y los estudios, mínimo dos horas antes',
                'La meditación es una herramienta poderosa para encarar el día. Lo único que necesitás son diez minutos en un lugar tranquilo y sin interrupciones.',
                'Se recomienda cuatro comidas a horario, con un adecuado equilibrio de carbohidratos, azúcares y proteínas.',
                'Escribir sobre un papel tus pensamientos y emociones puede ayudarte a procesar momentos difíciles, librarte de los sesgos del pensamiento y aumentar tu autoconciencia. Probá con 5 minutos por día: vas a fortalecer tu actitud positiva y te vas a sentir más conectado con tu propósito.',
                'Leer al menos 20 minutos al día puede reducir el estrés y mejorar la concentración.',
                'En Argentina, 1 de cada 3 (33%) personas presenta un problema de salud mental a partir de los 20 años. Las problemáticas más frecuentes son los trastornos de ansiedad, del estado de ánimo y los problemas por consumo de sustancias',
                'Una de cada cuatro personas (25%) en el mundo padece algún tipo de trastorno mental según la Organización Mundial de la Salud (OMS). De éstos, dos tercios no reciben ningún tipo de atención',
                'Escribir tres cosas por las que estás agradecido cada día puede aumentar tu bienestar emocional',
                'Pasar al menos 15 minutos al aire libre cada día puede mejorar tu estado de ánimo y reducir el estrés.']

const intentos = document.querySelector('.intentos')
intentos.textContent = "Intentos: " + int;
const boton = document.querySelector('.adivinar')

const randomIndex = obtenerIndiceRandom(listaNumeros);
const randomNumber = listaNumeros[randomIndex]; //Asignamos una variable con el numero de la lista de datos con el indice devuelto

console.log(randomNumber)
console.log(listaDatos[randomIndex])


const mayoromenor = document.querySelector('.adivinar_numero')

const volverAJugar = document.createElement('button') //Creamos un boton para cuando pierda el usuario, se reemplace por el "Adivinar"
volverAJugar.classList.add('repetir')
volverAJugar.textContent = "Volver a jugar";

const dato = document.querySelector('.info');

const signo = document.querySelector('.num');
//Creamos un evento para cuando hace click en el boton de adivinar
boton.addEventListener('click', () => {
    const numInput = parseInt(document.querySelector('#adivinaNumero').value); //Obtenemos el numero del input
    if (numInput == randomNumber){
        esIgual()
    } else if (numInput > randomNumber) {
        esMayor()
    } else if (numInput < randomNumber) {
        esMenor()
    } else{
        console.log("No se ha ingresado ningun numero")
    }
    intentos.textContent = "Intentos: " + int;
    if (int == 0) {
        Swal.fire({
            icon: "error",
            title: "Perdiste!",
            text: "Para reintentarlo toca el boton 'Volver a Jugar'",
            timer: 5000
        });
        const parent = boton.parentNode;  // Obtener el nodo padre de 'boton' para despues reemplazarlo
        if (parent) {
            parent.replaceChild(volverAJugar, boton);
        }
    }
})

volverAJugar.addEventListener('click', () => {
    location.reload()
})
