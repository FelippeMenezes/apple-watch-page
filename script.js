const imagemVisualizacao = document.querySelector('#visualizacao img');
const tituloProduto = document.querySelector('h1');
const nomeCorSelecionada = document.querySelector('#nome-cor-selecionada');
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');


const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = ["Verde-cipreste", "Azul-inverno", "Meia-noite", "Estelar", "Rosa-claro"];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

function atualizarCorSelecioanda() {
    const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);

    numCorSelecionada = opcaoCorSelecionada;

    const nomeCor = opcoesCores[numCorSelecionada];

    tituloProduto.innerText = "Pulseira loop esportiva " + nomeCor.toLowerCase() + " para caixa de " + opcoesTamanho[numTamanhoSelecionado];

    nomeCorSelecionada.innerText = "Cor - " + nomeCor;
}


// console.log(imagemVisualizacao)

function atualizarTamanho() {
    const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);

    numTamanhoSelecionado = opcaoTamanhoSelecionado;

    const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

    // console.log(tamanhoCaixa);

    // console.log(opcaoTamanhoSelecionado);

    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + tamanhoCaixa

    if (tamanhoCaixa === "41 mm") {
        imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}

function atualizarImagemSelecionada() {
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);

    numImagemSelecionada = opcaoImagemSelecionada;

    // console.log(opcaoImagemSelecionada);

    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + numImagemSelecionada + ".jpeg";
}

// atualizarImagemSelecionada();
