let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let dataNasc = document.querySelector('#dataNasc')
let labelDataNasc = document.querySelector('#labelDataNasc')
let validDataNasc = false

let nomeSocial = document.querySelector('#nomeSocial')
let labelNomeSocial = document.querySelector('#labelNomeSocial')
let validNomeSocial = false

let CPF = document.querySelector('#CPF')
let labelCPF = document.querySelector('#labelCPF')
let validCPF = false

let nomeResp = document.querySelector('#nomeResp')
let labelNomeResp = document.querySelector('#labelNomeResp')
let validNomeResp = false

let CPFResp = document.querySelector('#CPFResp')
let labelCPFResp = document.querySelector('#labelCPFResp')
let validCPFResp = false

let tel1 = document.querySelector('#tel1')
let labelTel1 = document.querySelector('#labelTel1')
let validTel1 = false

let tel2 = document.querySelector('#tel2')
let labelTel2 = document.querySelector('#labelTel2')
let validTel2 = false

let CEP = document.querySelector('#CEP')
let labelCEP = document.querySelector('#labelCEP')
let validCEP = false

let bairro = document.querySelector('#bairro')
let labelBairro = document.querySelector('#labelBairro')
let validBairro = false

let rua = document.querySelector('#rua')
let labelRua = document.querySelector('#labelRua')
let validRua = false

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')
let validNumero = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucesso = document.querySelector('#msgSucesso')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minímo 3 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

nomeSocial.addEventListener('keyup', () => {
    if (nomeSocial.value.length <= 2) {
        labelNomeSocial.setAttribute('style', 'color: red')
        labelNomeSocial.innerHTML = 'Nome Social *Insira no minímo 3 caracteres'
        validNomeSocial = false
    } else {
        labelNomeSocial.setAttribute('style', 'color: green')
        labelNomeSocial.innerHTML = 'Nome Social'
        validNomeSocial = true
    }
})

CPF.addEventListener('keyup', () => {
    if (CPF.value.length <= 10) {
        labelCPF.setAttribute('style', 'color: red')
        labelCPF.innerHTML = 'CPF *Insira o CPF corretamente'
        validCPF = false
    } else {
        labelCPF.setAttribute('style', 'color: green')
        labelCPF.innerHTML = 'CPF'
        validCPF = true
    }
})

nomeResp.addEventListener('keyup', () => {
    if (nomeResp.value.length <= 2) {
        labelNomeResp.setAttribute('style', 'color: red')
        labelNomeResp.innerHTML = 'Nome do Responsável *Insira no minímo 3 caracteres'
        validNomeResp = false
    } else {
        labelNomeResp.setAttribute('style', 'color: green')
        labelNomeResp.innerHTML = 'Nome do Responsável'
        validNomeResp = true
    }
})

CPFResp.addEventListener('keyup', () => {
    if (CPFResp.value.length <= 10) {
        labelCPFResp.setAttribute('style', 'color: red')
        labelCPFResp.innerHTML = 'CPF do Responsável *Insira o CPF corretamente'
        validCPFResp = false
    } else {
        labelCPFResp.setAttribute('style', 'color: green')
        labelCPFResp.innerHTML = 'CPF do Responsável'
        validCPFResp = true
    }
})

tel1.addEventListener('keyup', () => {
    if (tel1.value.length <= 8) {
        labelTel1.setAttribute('style', 'color: red')
        labelTel1.innerHTML = 'Telefone 1 *Insira o número corretamente'
        validTel1 = false
    } else {
        labelTel1.setAttribute('style', 'color: green')
        labelTel1.innerHTML = 'Telefone 1'
        validTel1 = true
    }
})

tel2.addEventListener('keyup', () => {
    if (tel2.value.length <= 8) {
        labelTel2.setAttribute('style', 'color: red')
        labelTel2.innerHTML = 'Telefone 2 *Insira o número corretamente'
        validTel2 = false
    } else {
        labelTel2.setAttribute('style', 'color: green')
        labelTel2.innerHTML = 'Telefone 2'
        validTel2 = true
    }
})

CEP.addEventListener('keyup', () => {
    if (CEP.value.length <= 7) {
        labelCEP.setAttribute('style', 'color: red')
        labelCEP.innerHTML = 'CEP *Insira o CEP corretamente'
        validCEP = false
    } else {
        labelCEP.setAttribute('style', 'color: green')
        labelCEP.innerHTML = 'CEP'
        validCEP = true
    }
})

bairro.addEventListener('keyup', () => {
    if (bairro.value.length <= 2) {
        labelBairro.setAttribute('style', 'color: red')
        labelBairro.innerHTML = 'Bairro *Insira no minímo 3 caracteres'
        validBairro = false
    } else {
        labelBairro.setAttribute('style', 'color: green')
        labelBairro.innerHTML = 'Bairro'
        validBairro = true
    }
})

rua.addEventListener('keyup', () => {
    if (rua.value.length <= 2) {
        labelRua.setAttribute('style', 'color: red')
        labelRua.innerHTML = 'Rua *Insira no minímo 3 caracteres'
        validRua = false
    } else {
        labelRua.setAttribute('style', 'color: green')
        labelRua.innerHTML = 'Rua'
        validRua = true
    }
})

numero.addEventListener('keyup', () => {
    if (numero.value.length <= 1) {
        labelNumero.setAttribute('style', 'color: red')
        labelNumero.innerHTML = 'Número *Preencha corretamente'
        validNumero = false
    } else {
        labelNumero.setAttribute('style', 'color: green')
        labelNumero.innerHTML = 'Número'
        validNumero = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Digite no minímo 6 digitos'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *Senhas diferentes'
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        validConfirmSenha = true
    }
})

function cadastrar() {
    if (validBairro && validCEP && validCPF && validCPFResp && validConfirmSenha && validNome && validNomeResp && validNomeSocial && validNumero && validRua && validSenha && validTel1 && validTel2) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nomeCad: nome.value,
            nomeSocialCad: nomeSocial.value,
            CPFCad: CPF.value,
            nomeRespCad: nomeResp.value,
            CPFRespCad: CPFResp.value,
            tel1Cad: tel1.value,
            tel2Cad: tel2.value,
            CEPCad: CEP.value,
            bairroCad: bairro.value,
            ruaCad: rua.value,
            numeroCad: numero.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>'
        //fazer sumir o outro
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = 'tela-login.html'
        }, 3000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar...</strong>'
        //fazer sumir o outro
        msgSucesso.setAttribute('style', 'display: none')
        msgSucesso.innerHTML = ''
    }

}

//Permite ver a senha
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
//Permite ver a Senha

