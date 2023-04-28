export async function translate(text, idiomaIni, idiomaFin) {
  const url = `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=${idiomaIni}|${idiomaFin}&q=${text}&mt=1&onlyprivate=0&de=a%40b.c`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4d38e0acc1msh0fc2a5dda7cebd1p143a0ajsn7d074a05495f',
      'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
    }
  };
  //retorna a chamada fetch inteira, sendo necessário transformar isto em uma promise no arquivo que importará o translate
  return fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      let textDataTransl = data;
      console.log(textDataTransl);
      let textTransl = textDataTransl.matches[0].translation;
      return textTransl;
    })
    .catch(err => console.error(err));
}
export function clickTranslate(text, idiomaIni, idiomaFin){
  const translBnt = document.getElementById('translate');
  translBnt.addEventListener('click', () => {
    translate(text,`${idiomaIni}`,`${idiomaFin}`)
    //aqui é feito o tratamento da promise
    .then((translatedText) => {
      fraseBox.innerHTML = translatedText;
    })
    .catch((error) => {
        console.log(error);
    });
  });
}