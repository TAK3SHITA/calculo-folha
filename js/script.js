/**
 * Calcula valor do desconto do inss
 * de maneira progressiva (modelo 2026)
 * 
 * @param {number}bruto - valor bruto do salario
 * @returns {number} o valor do desconto do inss
 */

function calcularINSS(bruto) {
    let inss = 0
    const tetoInss = 8475.55
    const valorParaCalculo = Math.min(bruto, tetoInss)
    //aray com as faixas do inss(facilita manutencao)
    const faixasInss = [
        { teto: 1621.00, aliquota: 0.075 },
        { teto: 2902.84, aliquota: 0.090 },
        { teto: 4354.27, aliquota: 0.120 },
        { teto: Infinity, aliquota: 0.140 }
    ]
    let tetoAnterior = 0
    for (const faixa of faixasInss) {
        if (valorParaCalculo > tetoAnterior) {
            //calcula qual parte do salario encaixa nessa faixa especifica
            const baseDaFaixa = Math.min(valorParaCalculo - tetoAnterior, faixa.teto - tetoAnterior)
            inss += baseDaFaixa * faixa.aliquota
            tetoAnterior = faixa.teto
        } else {
            break //ja calculou tudo
        }
        //console.log(`${faixa.teto} tem aliquota ${faixa.aliquota}`)
    }
    return inss
}

function processaCalculo(event) {
    event.preventDefault() //evita o recarregamento
    const bruto = parseFloat(document.getElementById('salarioBruto').value)

    if (isNaN(bruto) || bruto <= 0) {
        Swal.fire({
            icon: 'warning', //error, question, info, success
            title: 'valor invalido',
            text: 'informe um valorvalido de salario'
        })
    }
    //calculando INSS
    const inss = calcularINSS(bruto)
    //mostrando na ui
    document.getElementById('inssCalc').value = inss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    Swal.fire({
        icon: 'success',
        title:'calculo efetuado',
        showConfirmButton: false,
        timer: 1500
    })
}








