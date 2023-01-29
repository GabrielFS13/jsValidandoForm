export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaRep(cpf) || validaPrimeiro(cpf) || validaSegundo(cpf)){
        campo.setCustomValidity("CPF inválido")
    }
}


function validaRep(cpf){
    const repetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return repetidos.includes(cpf)
}


function validaPrimeiro(cpf){
    let soma = 0
    let multi = 10

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multi
        multi--
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 11){
        soma = 0
    }

    return soma != cpf[9]
}


function validaSegundo(cpf){
    let soma = 0
    let multi = 11

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multi
        multi--
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 11){
        soma = 0
    }

    return soma != cpf[10]
}