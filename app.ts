//Desafio 01

let funcionario: {codigo: number,nome: string} = {
    codigo:  120,
    nome: 'Heitor'
}

// Como podemos melhorar o esse código usando TS? => desafio2.js


interface Cadastro {
    nome: string,
    idade: number,
    ocupacao: Ocupacao
}

enum Ocupacao {
    Atriz,
    Padeiro
}

const pessoa1: Cadastro = {
    nome: 'maria',
    idade: 29,
    ocupacao: Ocupacao.Atriz
}

const pessoa2: Cadastro = {
    nome: 'roberto',
    idade: 19,
    ocupacao: Ocupacao.Padeiro
}

const pessoa3: Cadastro = {
    nome: 'laura',
    idade: 32,
    ocupacao: Ocupacao.Atriz
};

const pessoa4: Cadastro = {
    nome: 'carlos',
    idade: 19,
    ocupacao: Ocupacao.Padeiro
}

//Desafio 03

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal: number = 0;

limparSaldo()

function somarAoSaldo(soma: number) {
    if(campoSaldo) {
        saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString()
    limparSoma()
    }
}

function limparSoma() {
    soma.value = ""
}

function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0
        campoSaldo.innerHTML = saldoTotal.toString()
    } 
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
    limparSaldo();
    });
}