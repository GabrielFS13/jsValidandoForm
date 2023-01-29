import ehUmCPF from "./valida-cpf.js"
import ehMaiorIdade from "./validacao-idade.js"

const campos = document.querySelectorAll("[required]")
const form = document.querySelector("[data-formulario]")


form.addEventListener("submit", e =>{
    e.preventDefault()

    const list = {
        "nome": e.target.elements['nome'].value,
        "email": e.target.elements['email'].value,
        "rg": e.target.elements['rg'].value,
        "cpf": e.target.elements['cpf'].value,
        "aniversario": e.target.elements['aniversario'].value

    }

    localStorage.set("cadastro", JSON.stringify(list))

    window.location.href = './abrir-conta-form-2.html'
})


campos.forEach(campo =>{
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener("invalid", event => event.preventDefault())
})

const tiposErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo){
    let msg = ""
    campo.setCustomValidity("")

    if(campo.name == 'cpf' && campo.value.length >= 11){
        ehUmCPF(campo)
    }
    if(campo.name == 'aniversario' && campo.value != ""){
        ehMaiorIdade(campo)
    }

    tiposErro.forEach(erro =>{
        if(campo.validity[erro]){
            msg = mensagens[campo.name][erro]
        }
    })

    const mesgErro = campo.parentNode.querySelector(".mensagem-erro")
    const validador = campo.checkValidity()

    if(!validador){
        mesgErro.textContent = msg
    }else{
        mesgErro.textContent = ""
    }
}