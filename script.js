let idInterval = 0;
let miliSegundos = 0;
let segundos = 0;
let minutos = 0;
let isRunning = false;
let segDisplay = document.getElementById("segDisplay");
let horaDisplay = document.getElementById("horaDisplay");
let minDisplay  = document.getElementById("minDisplay");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

function display() {
    miliSegDisplay.innerHTML = formatNumber(miliSegundos);
    segDisplay.innerHTML = formatNumber(segundos) + ":";
    minDisplay.innerHTML = formatNumber(minutos) + ":";  
}

function formatNumber(number) {
    if (number < 10) {
        return "0" + number
    } else {
        return number
    }
}
function timer(){
    miliSegundos += 1;
    if (miliSegundos === 60) {
        segundos += 1;
        miliSegundos = 0;
    } else if(segundos === 60) {
        minutos += 1;
        segundos = 0;
    }
    display();
}

function startContar() {
   clearInterval(idInterval)
   isRunning = true;
   idInterval = setInterval(timer, 10)
   start.style.display = "none"
   stop.style.display = "block"
   
}
function pararContar() {
   clearInterval(idInterval)
   start.style.display = "block"
   stop.style.display = "none"
   isRunning = false;
}

function zerar(){
miliSegundos = 0
segundos = 0
minutos = 0
display();
pararContar();


}



document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        event.preventDefault(); // Impede o comportamento padrão da barra de espaço (rolar a página, etc.)
        if (isRunning) {
            pararContar();
        } else {
            startContar();
        }
    }
});
