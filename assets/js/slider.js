var bolinhas = document.querySelector('.slides-bolinhas');
var quantidade = document.querySelectorAll('.slides .slides-imagem');
var atual = 0;
var imagem = document.getElementById('slides-atual');
var proximo = document.getElementById('slides-proximo');
var voltar = document.getElementById('slides-voltar');
var rolar = true;

for(let i = 0; i < quantidade.length; i++) {
    var div = document.createElement('div');
    div.id = i;
    bolinhas.appendChild(div);
}

document.getElementById('0').classList.add('slides-imgAtual');

var posicao = document.querySelectorAll('.slides-bolinhas div');

for(let i = 0; i < posicao.length; i++) {
    posicao[i].addEventListener('click', () => {
        atual = posicao[i].id;
        rolar = false;
        slide();
    })
}

voltar.addEventListener('click', () => {
    atual--;
    rolar = false;
    slide();
})

proximo.addEventListener('click', () => {
    atual++;
    rolar = false;
    slide();
})

function slide() {
    if(atual >= quantidade.length) {
        atual = 0;
    } else if(atual < 0) {
        atual = quantidade.length-1;
    }

    document.querySelector('.slides-imgAtual').classList.remove('.slides-Atual');
    imagem.style.marginLeft = -1024*atual+'px';
    document.getElementById(atual).classList.add('slides-imgAtual');
}

slide();

setInterval(() => {
    if(rolar) {
        atual++;
        slide();
    } else {
        rolar = true;
    }
}, 4000)