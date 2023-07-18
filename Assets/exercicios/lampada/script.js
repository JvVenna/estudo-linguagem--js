// const turnOn = document.getElementById('turnOn');
const turnOnOff = document.getElementById('turnOnOff');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const interruptor = document.querySelector('.interruptor');
const information = document.querySelector('.information');
const explication = document.querySelector('.explication');
// const h1 = document.querySelector('.h1');

function info() {
    information.src = './img/information-vazio.png'
    explication.style.display = 'block';
}

function infoLeave() {
    information.src = './img/information-cheio.png';
    explication.style.display = 'none';
}

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampBroken() {
    lamp.src = './img/quebrada.png';
    interruptorBroken();
    document.querySelector("section").classList.remove("button");
    document.querySelector("body").style.background = "darkgrey"
    document.querySelector("section").style.backgroundColor = "transparent"
    document.querySelector("section").style.border = "0px"
}

// function changeColorOn() {
//     document.querySelector("body").classList.add("background");
//     // document.querySelector("body").style.backgroundColor = "blue"
// }
// function changeColorOff() {
//     document.querySelector("body").classList.add("background-off");
//     // document.querySelector("body").style.backgroundColor = "blue"
// }

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.png';
        interruptorOn();
        document.querySelector("body").style.background = "radial-gradient(circle, rgba(255, 255, 0, 1) 30%, rgb(255, 255, 255) 100%)"
        document.querySelector(".button").style.background = "white"
        document.querySelector(".button").style.border = "1px solid gray"
        // changeColorOn();
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.png';
        interruptorOff();
        document.querySelector("body").style.background = "whitesmoke"
        document.querySelector(".button").style.background = "lightgray"
        // changeColorOff();
    }
}

function interruptorOn() {
    interruptor.src = './img/interruptor-desligar.png';
}

function interruptorOff() {
    interruptor.src = './img/interruptor.png';
}
function interruptorBroken() {
    interruptor.src = './img/interruptor-quebrado.png';
}

function lampOnOff() {
    if (!isLampBroken() && turnOnOff.textContent === "Ligar") {

        lampOn()
        interruptorOn();
        turnOnOff.textContent = "Desligar"

    } else if (isLampBroken()) {

        return

    } else {

        interruptor.src = "./img/interruptor.png"
        lampOff();
        interruptorOff()
        turnOnOff.textContent = "Ligar"

    }
}

information.addEventListener("click", info)
information.addEventListener("mouseover", info)
information.addEventListener("mouseleave", infoLeave)
interruptor.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('dblclick', lampBroken);
// turnOn.addEventListener('click', lampOn);
// turnOff.addEventListener('click', lampOff);