"use strict";
//Desafio 01
let funcionario = {
    codigo: 120,
    nome: 'Heitor'
};
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Atriz"] = 0] = "Atriz";
    Ocupacao[Ocupacao["Padeiro"] = 1] = "Padeiro";
})(Ocupacao || (Ocupacao = {}));
const pessoa1 = {
    nome: 'maria',
    idade: 29,
    ocupacao: Ocupacao.Atriz
};
const pessoa2 = {
    nome: 'roberto',
    idade: 19,
    ocupacao: Ocupacao.Padeiro
};
const pessoa3 = {
    nome: 'laura',
    idade: 32,
    ocupacao: Ocupacao.Atriz
};
const pessoa4 = {
    nome: 'carlos',
    idade: 19,
    ocupacao: Ocupacao.Padeiro
};
//Desafio 03
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparSoma();
    }
}
function limparSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
