const phone_left = []; phone_left[0] = document.querySelector(".link_phone"); phone_left[1] = document.querySelector(".title"); phone_left[2] = document.querySelector(".subtitle")
const phone_right = []; phone_right[1] = document.querySelector(".title2"), phone_right[2] = document.querySelector(".subtitle2");

const qrcode = []; qrcode[0] = "Assets/exercicios/geradorqrcode.html"; qrcode[1] = "Gerador QR Code", qrcode[2] = "aplicação JS para criação de QR Code com o link digitado";
// const print1 = document.querySelector("#phone_print_img")
phone_left[0].href = qrcode[0]
phone_left[1].innerHTML = qrcode[1]
phone_left[2].innerHTML = qrcode[2]
phone_right[1].innerHTML = qrcode[1]
phone_right[2].innerHTML = qrcode[2]

