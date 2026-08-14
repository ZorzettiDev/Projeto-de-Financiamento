const express = require("express");

const router = express.Router();

const carros = require("../data/carros");
const bancos = require("../data/bancos");

router.get("/carros", (req, res) => {
    res.json(carros);
});

router.get("/bancos", (req, res) => {
    res.json(bancos);
});

router.post("/simular", (req, res) => {

    const {
        modelo,
        banco,
        parcelas,
        tipo
    } = req.body;

    if (!modelo || !banco || !parcelas || !tipo) {
        return res.status(400).json({
            erro: "Preencha todos os campos."
        });
    }

    if (parcelas < 20 || parcelas > 120) {
        return res.status(400).json({
            erro: "O número de parcelas deve estar entre 20 e 120."
        });
    }

    let carroEncontrado = null;

    for (const marca in carros) {

        const carro = carros[marca].find(
            item => item.modelo === modelo
        );

        if (carro) {
            carroEncontrado = carro;
            break;
        }
    }

    if (!carroEncontrado) {
        return res.status(404).json({
            erro: "Carro não encontrado."
        });
    }

    const taxa = bancos[banco];

    if (!taxa) {
        return res.status(404).json({
            erro: "Banco não encontrado."
        });
    }

    const valor = carroEncontrado.preco;

    let parcelaValor = 0;
    let total = 0;
    let primeiraParcela = 0;
    let ultimaParcela = 0;

    if (tipo === "Price") {

        parcelaValor =
            valor * taxa /
            (1 - (1 + taxa) ** (-parcelas));

        total = parcelaValor * parcelas;

        primeiraParcela = parcelaValor;
        ultimaParcela = parcelaValor;

    } else if (tipo === "Sac") {

        const amortizacao = valor / parcelas;

        let saldoDevedor = valor;

        let prestacoes = [];

        for (let i = 0; i < parcelas; i++) {

            const jurosMes =
                saldoDevedor * taxa;

            const prestacao =
                amortizacao + jurosMes;

            prestacoes.push(prestacao);

            saldoDevedor -= amortizacao;
        }

        primeiraParcela = prestacoes[0];

        ultimaParcela =
            prestacoes[prestacoes.length - 1];

        parcelaValor = primeiraParcela;

        total =
            prestacoes.reduce((a, b) => a + b, 0);

    } else {

        return res.status(400).json({
            erro: "Tipo de financiamento inválido."
        });
    }

    const jurosTotal = total - valor;

    res.json({
        modelo: modelo,
        preco: valor,
        banco: banco,
        taxa: taxa,
        parcelas: parcelas,
        tipo: tipo,
        primeiraParcela: primeiraParcela,
        ultimaParcela: ultimaParcela,
        valorParcela: parcelaValor,
        valorTotal: total,
        jurosTotal: jurosTotal
    });
});

module.exports = router;