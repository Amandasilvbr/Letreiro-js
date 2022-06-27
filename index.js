const onBtn = document.getElementById("turnOn").addEventListener("click", on)
const offBtn = document.getElementById("turnOff").addEventListener("click", off)
const infoBtn = document.getElementById("infoBtn").addEventListener("click", info)

function on() {
    document.getElementById("javascriptImg").src = "/img/ligada.png"
}

function off() {
    document.getElementById("javascriptImg").src = "/img/desligada.png"
}

function info() {
    alert("Desenvolvido por https://github.com/Amandasilvbr. \n\nDireitos autorais da fonte utilizada: https://www.vecteezy.com/vector-art/830359-orange-neon-lights-letters-and-numbers-vector , Neon Vectors by Vecteezy.")
}