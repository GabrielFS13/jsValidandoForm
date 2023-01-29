export default function ehMaiorIdade(campo){
    const nascimento = new Date(campo.value)
    
    if(!validaIdade(nascimento)){
        campo.setCustomValidity("Somente maior de idade")
    }
}

function validaIdade(data){
    const hoje = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return hoje >= dataMais18
}