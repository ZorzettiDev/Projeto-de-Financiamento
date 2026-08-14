const carros = {
    Fiat: [
        "Fiat Mobi", "Fiat Argo", "Fiat Pulse", "Fiat Cronos",
        "Fiat Strada", "Fiat Fastback", "Fiat Fiorino",
        "Fiat Toro", "Fiat Titano"
    ],

    Chevrolet: [
        "Chevrolet S10", "Chevrolet Silverado",
        "Chevrolet Equinox", "Chevrolet Captiva",
        "Chevrolet Spark", "Chevrolet Montana",
        "Chevrolet Tracker", "Chevrolet Spin",
        "Chevrolet Onix", "Chevrolet Trailblazer"
    ],

    Toyota: [
        "Toyota Yaris", "Toyota Yaris Cross",
        "Toyota Corolla", "Toyota Corolla Cross",
        "Toyota Hilux", "Toyota Rav4",
        "Toyota Gr Yaris", "Toyota Gr Corolla",
        "Toyota Hilux Sw4"
    ],

    Hyundai: [
        "Hyundai Hb20", "Hyundai Hb20s",
        "Hyundai Creta", "Hyundai Tucson",
        "Hyundai Palisade", "Hyundai Kona"
    ],

    Volkswagen: [
        "Volkswagen Polo", "Volkswagen Tera",
        "Volkswagen Saveiro", "Volkswagen Virtus",
        "Volkswagen Nivus", "Volkswagen T-Cross",
        "Volkswagen Jetta", "Volkswagen Tiguan",
        "Volkswagen Amarok"
    ],

    Jeep: [
        "Jeep Renegade", "Jeep Compass",
        "Jeep Commander", "Jeep Gladiator",
        "Jeep Wrangler"
    ],

    Renault: [
        "Renault Kwid", "Renault Logan",
        "Renault Kwid E-Tech", "Renault Duster"
    ],

    Honda: [
        "Honda City", "Honda Wr-V",
        "Honda Hr-V", "Honda Civic",
        "Honda Accord", "Honda Crv"
    ],

    Nissan: [
        "Nissan Kicks", "Nissan Versa",
        "Nissan Sentra", "Nissan Frontier"
    ],

    Peugeot: [
        "Peugeot 208", "Peugeot 2008"
    ],

    Citroen: [
        "Citroen C3", "Citroen Basalt"
    ],

    Ford: [
        "Ford Maverick", "Ford Territory",
        "Ford Ranger", "Ford F-150",
        "Ford Mustang"
    ]
}

const precos = {
    "Fiat Mobi": 85990,
    "Fiat Argo": 111990,
    "Fiat Pulse": 162490,
    "Fiat Cronos": 124990,
    "Fiat Strada": 151990,
    "Fiat Fastback": 183990,
    "Fiat Fiorino": 130990,
    "Fiat Toro": 235490,
    "Fiat Titano": 285990,

    "Chevrolet S10": 348790,
    "Chevrolet Silverado": 483990,
    "Chevrolet Equinox": 349990,
    "Chevrolet Captiva": 291190,
    "Chevrolet Spark": 154990,
    "Chevrolet Montana": 171390,
    "Chevrolet Tracker": 119900,
    "Chevrolet Spin": 165590,
    "Chevrolet Onix": 139390,
    "Chevrolet Trailblazer": 422590,

    "Toyota Yaris": 135090,
    "Toyota Yaris Cross": 189990,
    "Toyota Corolla": 206990,
    "Toyota Corolla Cross": 222690,
    "Toyota Hilux": 357890,
    "Toyota Rav4": 349290,
    "Toyota Gr Yaris": 354990,
    "Toyota Gr Corolla": 399990,
    "Toyota Hilux Sw4": 475990,

    "Hyundai Hb20": 132490,
    "Hyundai Hb20s": 138890,
    "Hyundai Creta": 206990,
    "Hyundai Tucson": 199490,
    "Hyundai Palisade": 479990,
    "Hyundai Kona": 239990,

    "Volkswagen Polo": 138690,
    "Volkswagen Tera": 146190,
    "Volkswagen Saveiro": 134190,
    "Volkswagen Virtus": 176690,
    "Volkswagen Nivus": 189690,
    "Volkswagen T-Cross": 203490,
    "Volkswagen Jetta": 278490,
    "Volkswagen Tiguan": 299990,
    "Volkswagen Amarok": 399890,

    "Jeep Renegade": 189490,
    "Jeep Compass": 278990,
    "Jeep Commander": 329990,
    "Jeep Gladiator": 529990,
    "Jeep Wrangler": 529990,

    "Renault Kwid": 89090,
    "Renault Logan": 101000,
    "Renault Kwid E-Tech": 99990,
    "Renault Duster": 171990,

    "Honda City": 155300,
    "Honda Wr-V": 155300,
    "Honda Hr-V": 214000,
    "Honda Civic": 430500,
    "Honda Accord": 333000,
    "Honda Crv": 353500,

    "Nissan Kicks": 199000,
    "Nissan Versa": 146490,
    "Nissan Sentra": 198790,
    "Nissan Frontier": 317990,

    "Peugeot 208": 138990,
    "Peugeot 2008": 184990,

    "Citroen C3": 112590,
    "Citroen Basalt": 129890,

    "Ford Maverick": 239900,
    "Ford Territory": 219900,
    "Ford Ranger": 499000,
    "Ford F-150": 580000,
    "Ford Mustang": 649000
}

const juros = {
    "Banco do Brasil": 0.0207,
    "Bradesco": 0.0174,
    "Caixa Econômica": 0.0197,
    "Itaú": 0.0212,
    "Santander": 0.0190
}

const marcaSelect = document.getElementById("marca")
const modeloSelect = document.getElementById("modelo")

for (let marca in carros) {

    marcaSelect.innerHTML += `
        <option value="${marca}">
            ${marca}
        </option>
    `
}

marcaSelect.addEventListener("change", () => {

    const marca = marcaSelect.value

    modeloSelect.innerHTML = `
        <option value="">
            Selecione um modelo
        </option>
    `

    carros[marca].forEach(modelo => {

        modeloSelect.innerHTML += `
            <option value="${modelo}">
                ${modelo}
            </option>
        `
    })
})

function simular() {

    const modelo = modeloSelect.value

    const banco =
        document.getElementById("banco").value

    const parcelas =
        Number(document.getElementById("parcelas").value)

    const tipo =
        document.getElementById("tipo").value

    if (!modelo || parcelas < 20 || parcelas > 120) {

        alert("Preencha todos os campos corretamente.")

        return
    }

    const valor = precos[modelo]

    const taxa = juros[banco]

    let parcelaValor = 0
    let total = 0
    let primeiraParcela = 0
    let ultimaParcela = 0

    if (tipo === "Price") {

        parcelaValor =
            valor * taxa /
            (1 - (1 + taxa) ** (-parcelas))

        total = parcelaValor * parcelas

        primeiraParcela = parcelaValor
        ultimaParcela = parcelaValor

    } else {

        const amortizacao = valor / parcelas

        let saldoDevedor = valor

        let prestacoes = []

        for (let i = 0; i < parcelas; i++) {

            const jurosMes =
                saldoDevedor * taxa

            const prestacao =
                amortizacao + jurosMes

            prestacoes.push(prestacao)

            saldoDevedor -= amortizacao
        }

        primeiraParcela = prestacoes[0]

        ultimaParcela =
            prestacoes[prestacoes.length - 1]

        parcelaValor = primeiraParcela

        total =
            prestacoes.reduce((a, b) => a + b, 0)
    }

    const jurosTotal = total - valor

    const hoje = new Date()

    const dataFinal = new Date(
        hoje.getFullYear(),
        hoje.getMonth() + parcelas,
        1
    )

    const mesFinal =
        String(dataFinal.getMonth() + 1).padStart(2, "0")

    const anoFinal =
        dataFinal.getFullYear()

    document.getElementById("resultado").style.display = "block"

    document.getElementById("resModelo").innerText = modelo

    document.getElementById("resPreco").innerText =
        valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

    document.getElementById("resBanco").innerText = banco

    document.getElementById("resParcelas").innerText =
        parcelas + "x"

    document.getElementById("resTipo").innerText = tipo

    if (tipo === "Sac") {

        document.getElementById("resParcela").innerText =
            `1ª: ${primeiraParcela.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}
             | Última: ${ultimaParcela.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}`

    } else {

        document.getElementById("resParcela").innerText =
            parcelaValor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
    }

    document.getElementById("resTotal").innerText =
        total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

    document.getElementById("resJuros").innerText =
        jurosTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

    const resultadoGrid =
        document.querySelector(".resultado-grid")

    const existente =
        document.getElementById("cardDataFinal")

    if (existente) {
        existente.remove()
    }

    const cardData = document.createElement("div")

    cardData.className = "card-result"

    cardData.id = "cardDataFinal"

    cardData.innerHTML = `
        <h3>Última Parcela</h3>
        <p>${mesFinal}/${anoFinal}</p>
    `

    resultadoGrid.appendChild(cardData)

    document.getElementById("resultado").scrollIntoView({
        behavior: 'smooth'
    })
}