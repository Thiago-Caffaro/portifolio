var tocarMusica = function(url){
    $("#audioPlayer").attr('src',url);  
}
function criarMusica(nome, dir, artista, secction=1){
    const musicaHtml = `
        <div class="item" onclick="tocarMusica('audio/${dir}.mp3')">
            <img src="images/${artista}.png" />
            <div class="play">
            <span class="fa fa-play"></span>
        </div>
        <h4>${nome}</h4>
        <p>${artista}</p>
        </div>
    `
    document.querySelector(`div.secction${secction}`).innerHTML += musicaHtml;

}
function newList(secction){
    document.getElementById('spotify-playlists').innerHTML += `<hr><div id="list" class="secction${secction}"></div>`;
}
var altura = window.screen.height;
console.log(altura);
if (altura < 800){
    newList(1);
    criarMusica('The Biggest Shot','the_biggest_shot',  'Coby Jox', 1);
    criarMusica('Cheiro de Cabuloso','cheiro_de_cabuloso',  'BakanA', 1);
    criarMusica('Cheiro de sexo','cheiro_de_sexo_putaria_entre_outros_afins', 'Praia seca', 1);
    newList(2);
    criarMusica('Safadeza no Abismo','safadeza_no_Abismo',  'g', 2);
    criarMusica('Mata malandro','mata_malandro',  'Madura', 2);
    criarMusica('Continue comigo','stay_with_me',  'Takamasa no Muro', 2);
    newList(3);
    criarMusica('Tenha medo do RS','fear_the_RS',  'notsNigrive', 3);
    criarMusica('Como comer a vida','como_comer_a_vida',  'Eva', 3);
    criarMusica('Você é você','voce_e_voce',  'The passion', 3);
    newList(4);
    criarMusica('Coisa da Vida','coisa_da_vida',  'Carlos Abreu', 4);
    criarMusica('Praia','praia',  'Pastel Cold', 4);
    criarMusica('Lagosta','Maicon Jordan',  'Maicon Jordan', 4);
    newList(5);
    criarMusica('Fredd','Fredd',  'F.Pinto', 5);
}else{
    newList(1);
    criarMusica('The Biggest Shot','the_biggest_shot',  'Coby Jox', 1);
    criarMusica('Cheiro de Cabuloso','cheiro_de_cabuloso',  'BakanA', 1);
    criarMusica('Cheiro de sexo','cheiro_de_sexo_putaria_entre_outros_afins', 'Praia seca', 1);
    criarMusica('Safadeza no Abismo','safadeza_no_Abismo',  'g', 1);
    newList(2);
    criarMusica('Mata malandro','mata_malandro',  'Madura', 2);
    criarMusica('Continue comigo','stay_with_me',  'Takamasa no Muro', 2);
    criarMusica('Tenha medo do RS','fear_the_RS',  'notsNigrive', 2);
    criarMusica('Como comer a vida','como_comer_a_vida',  'Eva', 2);
    newList(3);
    criarMusica('Você é você','voce_e_voce',  'The passion', 3);
    criarMusica('Coisa da Vida','coisa_da_vida',  'Carlos Abreu', 3);
    criarMusica('Praia','praia',  'Pastel Cold', 3);
    criarMusica('Lagosta','lagosta',  'Maicon Jordan', 3);
    newList(4);
    criarMusica('Fredd','Fredd',  'F.Pinto', 4);
}


