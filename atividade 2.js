// configurando projeto
const express = require('express')
const app = express()
const port = 3000
// middlewares
app.use(express.json()) 

// lógica -> contrato
app.get('/hello', (req, res) => {
    res.send("Hello World")
})
// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: corpo.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})

/* atividade 2 */

app.post('/exercicio2', (req, res) => {
    const { salario } = req.body;
    if (salario < 1000) {
    const salarioReajustado = salario * 1.3;
    res.json({ salarioReajustado });
    } else {
    res.json({ mensagem: "Funcionário não tem direito ao aumento" });
    }
    });

    /* atividade 3  */
    app.post('/exercicio3', (req, res) => {
        const { nome, salarioFixo, totalVendas, percentualComissao } = req.body;
        const salarioTotal = salarioFixo + (totalVendas * percentualComissao / 100);
        res.json({ nome, salarioTotal });
        });

        /* atividade 4 */
        app.post('/velocidade-media', (req, res) => {
            const { nomePiloto, distancia, tempo } = req.body;
            const velocidadeMedia = distancia / tempo;
            res.json({ nomePiloto, velocidadeMedia });
            });

            /* atividade 5 */
            app.post('/reajuste-salario', (req, res) => {
                const { salario } = req.body;
                let salarioReajustado;
                if (salario <= 2000) {
                salarioReajustado = salario * 1.5;
                } else {
                salarioReajustado = salario * 1.3;
                }
                res.json({ salarioReajustado });
                });

        /*  atividade 6  */

     app.post('/peso-ideal', (req, res) => {
    const { altura, sexo } = req.body;
    let pesoIdeal;
    if (sexo === 'homem') {
    pesoIdeal = (72.7 * altura) - 58;
  } else if (sexo === 'mulher') {
    pesoIdeal = (62.1 * altura) - 44.7;
     } else {
    return res.status(400).json({ mensagem: "Sexo inválido" });
    }
    res.json({ pesoIdeal });
     });

     /* atividade 7 */
     app.post('/exercicio7', (req, res) => {
        let listaProdutos = []
    
        req.body.forEach(produto => {
            listaProdutos.push(produto)
        });
    
        let maiorPrecoLido = 0
        listaProdutos.forEach(produto => {
            if (produto.preco > maiorPrecoLido){
                maiorPrecoLido = produto.preco
            }
        })
    
        let soma = 0
        console.log("soma ", soma)
        listaProdutos.forEach(produto => {
            console.log("produto preco ", produto.preco)
            soma = soma + produto.preco
            console.log("soma ", soma)
        })
    
        let media = soma / listaProdutos.length
    
        res.json({
            maiorPrecoLido: maiorPrecoLido,
            media: media.toFixed(2)
        })
    })
    
    

/* atividade 8 */

 app.post('/novo-salario', (req, res) => {
 const { salario, codigoCargo } = req.body;
 let novoSalario;
 switch (codigoCargo) {
 case 101:
 novoSalario = salario * 1.05;
 break;
 case 102:
 novoSalario = salario * 1.075;
 break;
case 103:
novoSalario = salario * 1.1;
break;
default:
novoSalario = salario * 1.15;
 }
const diferenca = novoSalario - salario;
res.json({ salarioAntigo: salario, novoSalario, diferenca });
 });

 /* atividade 9 */

 app.post('/calcular-salario', (req, res) => {
    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;
    const valorHoraTrabalhada = salarioMinimo / 5;
    const salarioMes = horasTrabalhadas * valorHoraTrabalhada;
    const acrescimoDependentes = dependentes * 32;
    const valorHoraExtra = valorHoraTrabalhada * 1.5;
    const salarioHoraExtra = horasExtras * valorHoraExtra;
    const salarioBruto = salarioMes + acrescimoDependentes + salarioHoraExtra;
    let irrf;
    if (salarioBruto <= 2000) {
    irrf = 0;
    } else if (salarioBruto <= 5000) {
    irrf = salarioBruto * 0.1;
    } else {
    irrf = salarioBruto * 0.2;
    }
    const salarioLiquido = salarioBruto - irrf;
    const gratificacao = salarioLiquido <= 3500 ? 1000 : 500;
    const salarioReceber = salarioLiquido + gratificacao;
    res.json({ salarioReceber });
    });

// start da aplicaão na porta definida
app.listen(port, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})