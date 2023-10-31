let btn = document.querySelector('#verSenha')


btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario')

    let senha = document.querySelector('#senha')

    var textuser = usuario.value
    var textsenha = senha.value


    let msgError = document.querySelector('#msgError')
    let listaUser = []


    let userValid = {
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))


    listaUser.forEach((item) => {
        if (textuser === item.nomeCad && textsenha === item.senhaCad) {
            userValid = {
                user: item.nomeCad,
                senha: item.senhaCad
            }
        }
    })
    

    if (textuser.trim() !== '' && textsenha.trim() !== '' && textuser === userValid.user && textsenha === userValid.senha) {
        location.href = 'tela-login.html' 

    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }
}

function logar(){

    var login = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value



    let msgError = document.querySelector('#msgError')

    if(login == "Descomplica" && senha == "uniamerica123"){
        location.href = "dashboard.html"
    } else{
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }

}