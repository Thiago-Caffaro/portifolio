/* Create a random dice roll generator with a button
var diceRoll = document.createElement('div');
diceRoll.innerHTML = '<button>Roll Dice</button>';
document.body.appendChild(diceRoll);
diceRoll.addEventListener('click', function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  alert('You rolled a ' + roll);
}); */
function apagar(type){
    if (type == 1){
        const novasRespostas = `<img src="imagem.png">`
        document.getElementById('console').innerHTML = novasRespostas;
    }else{
        const novasRespostas = `<img src="imagem2.png">`
        document.getElementById('console').innerHTML = novasRespostas;
    }

    
}
function receber(resposta, perguntaType){
    let perguntaText;
    let respondeu = false;
    /*Pergunta sobre nome:*/
    if (perguntaType == 'nome'){
        if (resposta == 'a'){
            perguntaText = '+RQ(?+'/**/;
            document.getElementById('pergunta').innerText = perguntaText;
            document.getElementById('user').innerText = 'Christopher';
            respondeu = true;
        }
        if (resposta == 'b'){
            perguntaText = 'EKM+'/**/;
            document.getElementById('pergunta').innerText = perguntaText;
            document.getElementById('user').innerText = 'Sayonara';
            respondeu = true;
        }
        if (resposta == 'c'){
            perguntaText = 'M!R'/**/;
            document.getElementById('pergunta').innerText = perguntaText;
            document.getElementById('user').innerText = 'Regina';
            respondeu = true;
        }
        if (resposta == 'd'){
            perguntaText = 'FL'/**/;
            document.getElementById('pergunta').innerText = perguntaText;
            document.getElementById('user').innerText = 'Felipe';
            respondeu = true;
        }
        if (resposta == 'e'){
            perguntaText = 'S!.'/**/;
            document.getElementById('pergunta').innerText = perguntaText;
            document.getElementById('user').innerText = 'Himeno';
            respondeu = true;
        }
        if (respondeu == true){
            const novasRespostas = `
                <button class="resposta sinais" onclick="receber('a', 'irr')">&</button>
                <button class="resposta sinais" onclick="receber('b', 'irr')">‘</button>
            `
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
    }
    if (perguntaType == 'irr'){
        /*Pergunta sim não irrelevante*/
        if (resposta == 'a' || resposta == 'b'){
            perguntaText = 'JK & +'/**/;
            document.getElementById('pergunta').innerText = perguntaText;
            respondeu = true;
        }
        if(respondeu == true){
            const novasRespostas = `
                <button class="resposta sinais" onclick="receber('a', 'rota')">&</button>
                <button class="resposta sinais" onclick="receber('b', 'rota')">‘</button>
            `
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
    }
    if (perguntaType == 'rota'){
        if (resposta == 'a'){
            perguntaText = 'K ! G';
            document.getElementById('pergunta').innerText = perguntaText;
            respondeu = true;
            if(respondeu == true){
                const novasRespostas = `
                    <button class="resposta" onclick="receber('a', 'rota1')">Sniper</button>
                    <button class="resposta" onclick="receber('b', 'rota1')">Pai morto</button>
                    <button class="resposta" onclick="receber('c', 'rota1')">Pai amaldiçoado e morto</button>
                    <button class="resposta" onclick="receber('d', 'rota1')">Amiga morta por ela</button>
                    <button class="resposta" onclick="receber('e', 'rota1')">Degolificada</button>
                `
                document.getElementById('respostas-box').innerHTML = novasRespostas;
                respondeu = false;
            }
        }
        if (resposta == 'b'){
            perguntaText = "S ' Q";
            document.getElementById('pergunta').innerText = perguntaText;
            respondeu = true;
            if (respondeu == true){
                const novasRespostas = `
                    <button class="resposta sinais" onclick="receber('a', 'rota2')">&</button>
                    <button class="resposta sinais" onclick="receber('b', 'rota2')">‘</button>
                `
                document.getElementById('respostas-box').innerHTML = novasRespostas;
                respondeu = false;
            }
        }
    }
    if (perguntaType == 'rota1'){
        /*em sigilos*/
        if (resposta == 'a'){
            perguntaText = '';
            document.getElementById('pergunta').innerText = perguntaText;
            const novasRespostas = `
                <button class="resposta" onclick="receber('a', 'rota1e')">A Arma</button>
                <button class="resposta" onclick="receber('b', 'rota1e')">Um erro meu</button>
                <button class="resposta" onclick="receber('c', 'rota1e')">A guerra</button>
                <button class="resposta" onclick="receber('d', 'rota1e')">Nada</button>
            `
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
        if (resposta == 'b'){
            perguntaText = '';
            document.getElementById('pergunta').innerText = perguntaText;

            const novasRespostas = `
            <button class="resposta" onclick="receber('a', 'rota1e')">Culpa minha</button>
            <button class="resposta" onclick="receber('b', 'rota1e')">Do Paranormal</button>
            <button class="resposta" onclick="receber('c', 'rota1e')">Da Ordem</button>
            <button class="resposta" onclick="receber('d', 'rota1e')">Nada</button>
            `
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
        if (resposta == 'c'){
            perguntaText = '';
            document.getElementById('pergunta').innerText = perguntaText;

            const novasRespostas = `
                <button class="resposta" onclick="receber('a', 'rota1e')">Rafaela Gauderio</button>
                <button class="resposta" onclick="receber('b', 'rota1e')">Felipe Oliveira</button>
                <button class="resposta" onclick="receber('c', 'rota1e')">O Paranormal</button>
                <button class="resposta" onclick="receber('d', 'rota1e')">Nada</button>
            `
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
        if (resposta == 'd'){
            perguntaText = '';
            document.getElementById('pergunta').innerText = perguntaText;

            const novasRespostas = `
                <button class="resposta" onclick="receber('a', 'rota1e')">Degolificada</button>
                <button class="resposta" onclick="receber('b', 'rota1e')">Paranormal</button>
                <button class="resposta" onclick="receber('c', 'rota1e')">Culpa sua</button>
                <button class="resposta" onclick="receber('d', 'rota1e')">Nada</button>
            `
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
        if (resposta == 'e'){
            perguntaText = '';
            document.getElementById('pergunta').innerText = perguntaText;

            const novasRespostas = `
                <button class="resposta" onclick="receber('a', 'rota1e')">Culpa sua</button>
                <button class="resposta" onclick="receber('b', 'rota1e')">Azar</button>
                <button class="resposta" onclick="receber('c', 'rota1e')">Traumas</button>
                <button class="resposta" onclick="receber('d', 'rota1e')">Nada</button>
            `
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
    }if (perguntaType == 'rota1e'){
        perguntaText = 'N.';
        document.getElementById('pergunta').innerText = perguntaText;
        const novasRespostas = `
            <button class="resposta sinais" onclick="apagar(2)">I</button>
            <button class="resposta sinais" onclick="apagar(2)">I</button>
        `
        document.getElementById('respostas-box').innerHTML = novasRespostas;
        respondeu = false;
        
    }
    
    if (perguntaType == 'rota2'){
        var c = 0;
        if (resposta == 'a'){
            
            perguntaText = "' N, S, “I, “I, “I";
            document.getElementById('pergunta').innerText = perguntaText;
            const novasRespostas = `<button class="resposta" onclick="apagar(1)">----</button>`
            document.getElementById('respostas-box').innerHTML = novasRespostas;
            respondeu = false;
        }
        if (resposta == 'b'){
            perguntaText = '';
            document.getElementById('pergunta').innerText = perguntaText;

            const novasRespostas = ``
            document.getElementById('console').innerHTML = novasRespostas;
            respondeu = false;
        }
    }
}