let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = '';
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;    
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    tentativas++;
    let chute = document.querySelector('input').value;
if (chute == numeroSecreto) {
exibirTextoNaTela('h1', 'Acertou');
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
exibirTextoNaTela('p', `Parabéns! Você descobriu o número secreto com ${tentativas} tentativas`);
document.getElementById('reiniciar').removeAttribute('disabled');


} else {
    if (chute > numeroSecreto) {
       exibirTextoNaTela('p', 'Seu palpite está muito alto!');
    } else 
        exibirTextoNaTela('p', 'Seu palpite está muito baixo!');
}

limparCampo();

}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo() {
    let numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}