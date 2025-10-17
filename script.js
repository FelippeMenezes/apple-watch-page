const imagemVisualizacao = document.querySelector('#visualizacao img');
const tituloProduto = document.querySelector('h1');

const opcoesTamanho = ["41 mm", "45 mm"];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;

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
