const phone_left = []; phone_left[0] = document.querySelector(".link_phone"); phone_left[1] = document.querySelector(".title"); phone_left[2] = document.querySelector(".subtitle")
const phone_right = []; phone_right[0] = document.querySelector(".link_phone_right"); phone_right[1] = document.querySelector(".title2"), phone_right[2] = document.querySelector(".subtitle2");
const phone_left2 = [document.querySelector(".link_phone2"), document.querySelector(".title3"), document.querySelector(".subtitle3")]

const qrcode = []; qrcode[0] = "Assets/exercicios/geradorqrcode.html"; qrcode[1] = "Gerador QR Code", qrcode[2] = "aplicação com API para geração de QR Code com o link digitado";
const relogiodigital = ["Assets/exercicios/relogiodigital.html", "Relogio Digital", "Aplicação em JS com função armazenando e exibindo horário atual"];
const lampada = ["Assets/exercicios/lampada/lampada.html", "Lampada Dinâmica", "aplicação em javascript puro, para se divertir, sendo um exer. para criatividade"]

phone_left[0].href = qrcode[0]; phone_left[1].innerHTML = qrcode[1]; phone_left[2].innerHTML = qrcode[2]
phone_right[0].href = relogiodigital[0]; phone_right[1].innerHTML = relogiodigital[1]; phone_right[2].innerHTML = relogiodigital[2]
phone_left2[0].href = lampada[0]; phone_left2[1].innerHTML = lampada[1]; phone_left2[2].innerHTML = lampada[2];

const chk = document.querySelector("#chk");

chk.addEventListener("change", () => {
    document.body.classList.toggle('dark')
})
