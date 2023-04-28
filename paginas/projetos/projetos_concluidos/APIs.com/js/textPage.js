const fraseBox = document.getElementById('frase');
const refreshBnt = document.querySelector("#refresh");
const copyBnt = document.querySelector("#copy");


refreshBnt.addEventListener('click', () => {
  // Recarrega a página quando o botão é clicado
  location.reload();
});

copyBnt.addEventListener('click', () =>{
    fraseBox.select();
    document.execCommand("copy");
})
