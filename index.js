const teclasMostradas = [
    "W",
    "A",
    "S",
    "D",
    "SPACE",
    "↑",
    "←",
    "↓",
    "→"
]

const sounds = [
    "sounds/kick.wav",
    "sounds/hihat.wav",
    "sounds/clap.wav",
    "sounds/ride.wav",
    "sounds/openhat.wav",
    "sounds/snare.wav",
    "sounds/tink.wav",
    "sounds/boom.wav",
    "sounds/tom.wav",
]

const mapaTeclado = {
    "w" : "0",
    "a" : "1",
    "s" : "2",
    "d" : "3",
    " " : "4",
    "ArrowUp" : "5",
    "ArrowLeft" : "6",
    "ArrowDown" : "7",
    "ArrowRight" : "8"
}


const criaTeclas = () => {
    const container = document.getElementById("container")
    for(var i = 0; i < teclasMostradas.length; i++) {
        container.innerHTML += `<button class="botao-tecla" id="${i}" onclick="tocaSons(${i})"><p class="texto-botao">${teclasMostradas[i]}</p></button>`
    }
}

criaTeclas()

var audios = new Audio

const tocaSons = (id) => {
    audios.src = sounds[id]
    audios.play()
}


const mapearTeclado = (evento) => {
    const tecla = evento.key  
    document.getElementById(mapaTeclado[tecla]).click();
}

document.addEventListener("keyup", mapearTeclado);


