import { clickTranslate } from "../../../ferramentas/translate/translate.js";
const url = "https://api.adviceslip.com/advice";
const fraseBox = document.getElementById("frase");

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let adviceData = data;
    let advice = adviceData.slip.advice;
    console.log(advice);
    fraseBox.innerHTML = advice;
    //ao clicar no botão de traduzir, é chamado a função importada com os parâmetros necessários
    clickTranslate(advice, 'en', 'pt-BR');
})
  .catch((error) => {
    console.log(error);
});
