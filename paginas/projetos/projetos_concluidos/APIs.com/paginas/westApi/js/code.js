import { clickTranslate } from "../../../ferramentas/translate/translate.js";
const url = `https://api.kanye.rest`;

 fetch(url)
 .then((response) => {
   return response.json();
 })

.then((data) => {
  const fraseData = data;
  const frase = fraseData.quote;
  document.getElementById('frase').innerHTML = `${frase}`;
  clickTranslate(frase, 'en', 'pt-BR');
})
.catch(function(error) {
   console.log(error);
});

const refreshBnt = document.querySelector("#refresh");
refreshBnt.addEventListener('click', () => {
  // Recarrega a página quando o botão é clicado
  location.reload();
});

