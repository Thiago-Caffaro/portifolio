function voltar() {
    window.history.back();
}

now = new Date
let min = now.getMinutes();
let hora = now.getHours();
const data = new Date();
const dataNasc = new Date(2007, 0, 18);
var boa = document.querySelector("#boa");
var idade = document.querySelector("#idade");

console.log(hora);

if (hora < 12){
    boa.innerHTML = "Bom dia!"

}    
else if (hora > 12 && hora < 18){
    boa.innerHTML = "Boa tarde!"
}
else if (hora > 18 || hora == 18 && min > 0){
    boa.innerHTML = "Boa noite!"

}
const miliDiff = data - dataNasc;
const idadeNum = Math.floor(miliDiff / (1000 * 60 * 60 * 24 * 365.25));
//Converte a diferença em milissegundos para anos
idade.innerHTML = idadeNum;