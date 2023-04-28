function abrirPasta(type) {
    const janelaHtml = `
        <div id="janela">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
        </div>`
    document.getElementById('placeHolderJanela').innerHTML = janelaHtml
    if (type === 'arquivo'){
        const typeHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <div id="lateral-arquivo">
                <table style="width:100%">
                    <tr>
                        <th>Arquivos</th>
                    </tr>
                    <tr onClick="abrirDiretorio('areaTrabalho')">
                        <td>Área de trabalho</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Documentos')">
                        <td>Documentos</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Downloads')">
                        <td>Downloads</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Imagens')">
                        <td>Imagens</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Lixeira')">
                        <td>Lixeira</td>
                    </tr>
                    <tr onClick="abrirDiretorio('Users')">
                        <td>Usuários</td>
                    </tr>
                </table>
            </div>
            <div id="main-arquivo">
            </div>
        `
        document.getElementById('janela').innerHTML = typeHtml
    }
    if(type === 'lixeira'){
        const typeHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
        `
    }
}
function fecharJanela(){
    const janelaHtml = ``
    document.getElementById('placeHolderJanela').innerHTML = janelaHtml
}
function abrirPrograma(programa){
    const janelaHtml = `
        <div id="janela">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
        </div>`
    document.getElementById('placeHolderJanela').innerHTML = janelaHtml
    if (programa === 'heardfy'){
        const progHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <iframe src="programas/heardfy/index.html" style="height: 100%; width: 100%; border: 0;"></iframe>
        `
        document.getElementById('janela').innerHTML = progHtml
    }
    if (programa === 'chromo'){
            const progHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <iframe src="programas/jump/index.html" style="height: 100%; width: 100%; border: 0;"></iframe>
        `
        document.getElementById('janela').innerHTML = progHtml
    }
    if (programa === 'xess'){
        const progHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <iframe src="programas/xess/index.html" style="height: 100%; width: 100%; border: 0; margin: 0;"></iframe>
        `
        document.getElementById('janela').innerHTML = progHtml
    }
    if (programa === 'cmd'){
        const progHtml = `
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <iframe src="programas/cmd/index.html" style="height: 100%; width: 100%; border: 0;"></iframe>
        `
        document.getElementById('janela').innerHTML = progHtml
    }
}
function abrirVideo(video){
    const videoHtml = `
    <div class="box"  onclick="flip()">
            <div id="box__content">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div><table>
                <div class="box__front" style="background-color: aliceblue;">
                    <video width="100%" height="600px" autoplay><source src=${video} type="video/mp4"></video>
                </div>
                <div class="box__back" style="background-color: aliceblue;"></div>   
            </div>
        </div>
    </div>
    `
    document.getElementById('placeHolderJanela').innerHTML = videoHtml
}
function abrirImagem(imagem, papel){
    let src = '';
    if (papel == 'velho'){
        src = "default.png"
    }else if (papel == 'novo'){
        src = "default2.png"
    }else {
        src = `${papel}.png`;
    }
    if(papel != 'spin' && papel != 'spin2'){
        const imagemHtml = `
        <div class="box"  onclick="flip()">
            <div id="box__content">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div><table>
                <div class="box__front">
                    <img src="${imagem}">
                </div>
                <div class="box__back">
                    <img src="images/${src}">
                </div>
            </div>
        </div>
        `
        document.getElementById('placeHolderJanela').innerHTML = imagemHtml
    }else{
        const imagemHtml = `
        <div class="box">
            <div id="box__content" class="spin" style="border: 0;">
                <div class="box__front">
                    <img src="${imagem}">
                </div>
                <div class="box__back">
                    <img src="images/${src}">
                </div>
            </div>
        </div>
        `
        document.getElementById('placeHolderJanela').innerHTML = imagemHtml
    }
    
}
function abrirAudio(audio){
    const audioHtml = `
        <div id="janela">
            <div id="barra-janela-cima"><button onClick="fecharJanela()"><img src="images/icons/x_icon_172101.png"></button></div>
            <img src="images/icons/icons8-audio-100a.png" style="margin-left: 500px; margin-top: 200px;"><br>
            <audio src="${audio}" controls style="margin-left: 400px;"></audio>
        </div>
    `
    document.getElementById('placeHolderJanela').innerHTML = audioHtml
}
function abrirDiretorio(type){
    if (type === 'areaTrabalho'){
        const dirHtml = `
        <table style="width:100%">
            <tr onclick="abrirPasta('arquivo'), abrirDiretorio('Lixeira')">
                <td>Lixeira</td>
            </tr>
            <tr onclick="abrirImagem('images/cato.png', 'novo')">
                <td>Meu amor1.png</td>
            </tr>
            <tr onclick="abrirVideo('images/pexe.mp4')">
                <td>Meu amor2.mp4</td>
            </tr>
            <tr onclick="abrirVideo('images/miau.mp4')">
                <td>Meu amor3.mp4</td>
            </tr>
            <tr onclick="abrirAudio('ult.mp3')">
                <td>Corra.mp3</td>
            </tr>
        </table>
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Documentos"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td>Pasta vazia</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Downloads"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td onclick="abrirVideo('images/pexe.mp4')">Meu amor2.mp4</td>
                </tr>
                <tr>
                    <td onclick="abrirVideo('images/miau.mp4')">Meu amor3.mp4</td>
                </tr>
            </table>    
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Imagens"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td onclick="abrirImagem('images/cato.png', 'novo')">Meu amor1.png</td>
                </tr>
            </table> 
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Lixeira"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td onclick="abrirImagem('images/spin.png', 'spin')">Yoo, no fucking way</td>
                </tr>
                <tr>
                    <td onclick="abrirImagem('images/spin2.png', 'spin2')">AHHHHHHHH</td>
                </tr>
            </table> 
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
    if (type === "Users"){
        const dirHtml = `
            <table style="width:100%">
                <tr>
                    <td onclick="user('felipe')">Felipe Oliveira</td>
                </tr>
                <tr>
                    <td onclick="user('sayonara')">Sayonara</td>
                </tr>
                <tr>
                    <td onclick="user('himeno')">Himeno</td>
                </tr>
                <tr>
                    <td onclick="user('cristopher')">Cristopher</td>
                </tr>
                <tr>
                    <td onclick="user('regina')">Regina</td>
                </tr>
                <tr>
                    <td onclick="user('tago')">Thiago Caffaro</td>
                </tr>
            </table> 
        `
        document.getElementById('main-arquivo').innerHTML = dirHtml
    }
}

function user(user){
    if (user === 'felipe'){
        const usrHtml = `
            <table style="width:100%">
                <tr onclick="abrirImagem('images/felipe/gay.png', 'velho')">
                    <td>Declaração.png</td>
                </tr>
                <tr onclick="abrirImagem('images/felipe/guriaremaster.png', 'novo')">
                    <td>Ela.png</td>
                </tr>
                <tr onclick="abrirImagem('images/felipe/morte.png', 'velho')">
                    <td>Adeus.png</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = usrHtml
    }
    if(user === 'sayonara'){
        const usrHtml = `
            <table style="width:100%">
                <tr onclick="abrirVideo('images/sayonara/funny.mp4')">
                    <td>Funny.mp4</td>
                </tr>
                <tr onclick="abrirImagem('images/sayonara/wallpaperSayonara.png', 'novo')">
                    <td>wallpaper.png</td>
                </tr>
                <tr onclick="abrirImagem('images/sayonara/myBeloved.png', 'novo')">
                    <td>Pistola-Pika.jpeg</td>
                </tr>
                <tr onclick="abrirImagem('images/sayonara/espada.png', 'novo')">
                    <td>Espada-foda.png</td>
                </tr>
                <tr onclick="abrirImagem('images/sayonara/cabelo.png', 'novo')">
                    <td>Cabelo.jpeg</td>
                </tr>
                <tr onclick="abrirImagem('images/sayonara/folha.png', 'sayonara/folha2')">
                    <td>Carta.png</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = usrHtml
    }
    if(user === 'cristopher'){
        const usrHtml = `
            <table style="width:100%">
                <tr onclick="abrirImagem('images/Cristopher/Cristopher.png', 'novo')">
                    <td>Lista-de-compras.png</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = usrHtml
    }
    if(user === 'himeno'){
        const usrHtml = `
            <table style="width:100%">
                <tr onclick="abrirImagem('images/Himeno/Himeno.png', 'novo')">
                    <td>Anotações.png</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = usrHtml
    }
    if(user === 'regina'){
        const usrHtml = `
            <table style="width:100%">
                <tr onclick="abrirVideo('images/Regina/cat.mp4')">
                    <td>gatin.mp4</td>
                </tr>
                <tr onclick="abrirVideo('images/Regina/cats.mp4')">
                    <td>hihihihi.mp4</td>
                </tr>
                <tr onclick="abrirVideo('images/Regina/gostosa.mp4')">
                    <td>Meta.mp4</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = usrHtml
    }
    if(user === 'tago'){
        const usrHtml = `
            <table style="width:100%">
                <tr onclick="abrirImagem('images/frenteDog.png', 'trasDog')">
                    <td>:D</td>
                </tr>
            </table>
        `
        document.getElementById('main-arquivo').innerHTML = usrHtml
    }
}
function flip(){
    var element = document.getElementById("box__content");
    element.classList.toggle("flip");

}
