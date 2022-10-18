
let nombreUsuario = prompt("Bienvenide, antes de comenzar, como te llamas?", "aqui va tu nombre");
let titulo = document.querySelector("h1");
titulo.innerHTML ="Bienvenide " + nombreUsuario + ", esta es la trivia de panes";
let subtitulo = document.querySelector("h2");
subtitulo.innerHTML ="¡¿Liste para COMENZAR " + nombreUsuario + "?!";

let btnRedi = document.getElementById("btnRedi");
btnRedi.addEventListener("click", vamos);
function vamos() {
  alert("¡Vamos Allá! " + nombreUsuario);
  let comienzo = document.getElementsByClassName("sin-grilla-trivia");
  Object.values(comienzo).map(item=> {
    item.classList.toggle("con-grilla-trivia")
  })

}

function muestraRespuestas() {
  alert(" R 1 = Dona \n R 2 = Oreja \n R 3 = Concha")
}

let respPregunta1 = document.getElementsByName('pregunta1');
let respPregunta2 = document.getElementsByName('pregunta2');
let respPregunta3 = document.getElementsByName('pregunta3');

let msjP1
let msjP2
let msjP3
let correctas = 0
let incorrectas = 0

function validando() {
  correctas = 0;
  incorrectas = 0;
  if (respPregunta1[0].checked == true) {
    msjP1 = "Pregunta 1 = Correcto!!! comete un panecito :D";
    correctas++;
  } else {
    msjP1 = "Pregunta 1 = Fallaste te hace falta comer más pan ;p";
    incorrectas++;
  }

  if (respPregunta2[1].checked == true) {
    msjP2 = "Pregunta 2 = Correcto!!! comete un panecito :D";
    correctas++;
  } else {
    msjP2 = "Pregunta 2 = Fallaste te hace falta comer más pan ;p";
    incorrectas++;
  }
  if (respPregunta3[2].checked == true) {
    msjP3 = "Pregunta 3 = Correcto!!! comete un panecito :D";
    correctas++;
  } else {
    msjP3 = "Pregunta 3 = Fallaste te hace falta comer más pan ;p";
    incorrectas++;
  }
  alert("Estos son tus resultados " + nombreUsuario + "\n" + "Acertaste en solo " + correctas + ", y fallaste en " + incorrectas + "\n" + msjP1 + "\n" + msjP2 + "\n" + msjP3);
}
let buttonValida = document.getElementById("validacion");
buttonValida.addEventListener("click", validando);