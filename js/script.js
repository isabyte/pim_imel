/* CONTATO DASHBOARD */

function verificaInputsContato() {
  var tel = document.getElementById('telContatoDash').value;
  var email = document.getElementById('emailContatoDash').value;
  var endereco = document.getElementById('enderecoContatoDash').value;

  if(tel.length < 16 || email.length < 3 || endereco.length < 10) {
    alert('Preencha todos os campos corretamente');
    return false;
  }
  return true;
}

function editarContato() {
  // desabilita o botão de editar
  document.getElementById('botao-editar').disabled = true;

  // pega o input invisível do telefone
  var tel = document.getElementById('telContatoDash');

  // pega o parágrafo do telefone
  var pTel = document.getElementById('p-telContatoDash');

  // torna o input do telefone visível
  tel.style.display = "block";

  // torna o parágrafo do telefone invisível
  pTel.style.display = "none";

  /* o código abaixo segue o mesmo padrão do acima */

  var email = document.getElementById('emailContatoDash');
  var pEmail = document.getElementById('p-emailContatoDash');

  email.style.display = "block";
  pEmail.style.display = "none";

  var endereco = document.getElementById('enderecoContatoDash');
  var pEndereco = document.getElementById('p-enderecoContatoDash');

  endereco.style.display = "block";
  pEndereco.style.display = "none";

  // pega a div onde os botões estão escondidos
  var botoes = document.getElementById('div-botoes-salvar');

  // torna os botões visíveis
  botoes.style.display = "block";
}

function cancelarContato() {
  // pega o input do telefone
  var tel = document.getElementById('telContatoDash');

  // pega o parágrafo do telefone
  var pTel = document.getElementById('p-telContatoDash');

  /* o código abaixo segue o mesmo padrão do acima */

  var email = document.getElementById('emailContatoDash');
  var pEmail = document.getElementById('p-emailContatoDash');

  var endereco = document.getElementById('enderecoContatoDash');
  var pEndereco = document.getElementById('p-enderecoContatoDash');

  var salvar = document.getElementById('div-botoes-salvar');

  if(confirm('Tem certeza que deseja cancelar? Todos os dados serão perdidos') == true) {
  // restaura a página sem perder os dados antigos, diferentemente de location.reload() que recarrega a página

      // habilita o botão de editar
      document.getElementById('botao-editar').disabled = false;

      // esconde os botaoes de salvar ou cancelar
      salvar.style.display = "none";

      // esconde os inputs
      tel.style.display = "none";
      email.style.display = "none";
      endereco.style.display = "none";

      // mostra os parágrafos
      pTel.style.display = "block";
      pEmail.style.display = "block";
      pEndereco.style.display = "block";

  }
}

function salvarContato() {
  // pega o input do telefone
  var tel = document.getElementById('telContatoDash');

  // pega o parágrafo do telefone
  var pTel = document.getElementById('p-telContatoDash');

  /* o código abaixo segue o mesmo padrão do acima */

  var email = document.getElementById('emailContatoDash');
  var pEmail = document.getElementById('p-emailContatoDash');

  var endereco = document.getElementById('enderecoContatoDash');
  var pEndereco = document.getElementById('p-enderecoContatoDash');
  
  if(!verificaInputsContato()) {
      return;
  }

  if(confirm('Deseja salvar as alterações?') == true) {
      // coloca o valor digitado no input do telefone no parágrafo
      pTel.innerText = tel.value;

      // torna o input invisível e o parágrafo visível com o novo valor
      tel.style.display = "none";
      pTel.style.display = "block";

      /* o código abaixo segue o mesmo padrão do acima */

      pEmail.innerText = email.value;

      email.style.display = "none";
      pEmail.style.display = "block";

      pEndereco.innerText = endereco.value;

      endereco.style.display = "none";
      pEndereco.style.display = "block";

      // habilita o botão de editar
      document.getElementById('botao-editar').disabled = false;

      // pega a div onde os botões de salvar ou cancelar estão
      var botoes = document.getElementById('div-botoes-salvar');

      // esconde os botões
      botoes.style.display = "none";
  }
}

/* FIM CONTATO DASHBOARD */

function editarJustificativa() {
    const texto = document.getElementById('texto');
    const campoInput = document.getElementById('campoInput');
    const btnSaveJust = document.getElementById('btn-save-just');
    const btnEditJust = document.getElementById('btn-edit-just');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa() {
    if (confirm('Deseja salvar as alterações?') == true) {
        //se sim, atualiza o paragrafo com o valor do input, oculta o input e mostra o parágrafo dnv (com oq vc escreveu)
        const texto = document.getElementById('texto');
        const campoInput = document.getElementById('campoInput');
        const btnSaveJust = document.getElementById('btn-save-just');
        const btnEditJust = document.getElementById('btn-edit-just');

        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        //se não, faz o texto antigo aparecer dnv e oculta o input, basicamente restaurando a pagina sem perder os dados antigos. Diferente da função window.location.reload(), que faz a pagina restaurar por inteiro
        const texto = document.getElementById('texto');
        const campoInput = document.getElementById('campoInput');
        const btnSaveJust = document.getElementById('btn-save-just');
        const btnEditJust = document.getElementById('btn-edit-just');

        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP(){
        const botaoChamadaP= document.getElementById('btn-chamadaP');
        const botaoChamadaF= document.getElementById('btn-chamadaF');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}
function chamadaF(){
     const botaoChamadaP= document.getElementById('btn-chamadaP');
        const botaoChamadaF= document.getElementById('btn-chamadaF');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}

function editarSobre() {
    const textoSobre = document.getElementById('pSobre');
    const campoInputSobre = document.getElementById('campoInputSobre');
    const btnSaveSobre = document.getElementById('btn-save-sobre');
    const btnEditSobre = document.getElementById('btn-edit-sobre');
  
    btnEditSobre.style.display = 'none'; //desabilita botao editar
    btnSaveSobre.style.display = 'block';//habilita botao salvar
    textoSobre.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInputSobre.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInputSobre.value = textoSobre.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
  }
  
  function salvarSobre() {
    if (confirm('Deseja salvar as alterações?') == true) {
        //se sim, atualiza o paragrafo com o valor do input, oculta o input e mostra o parágrafo dnv (com oq vc escreveu)
        const textoSobre = document.getElementById('pSobre');
        const campoInputSobre = document.getElementById('campoInputSobre');
        const btnSaveSobre = document.getElementById('btn-save-sobre');
        const btnEditSobre = document.getElementById('btn-edit-sobre');
  
        btnEditSobre.style.display = 'block'; //habilita botao editar
        btnSaveSobre.style.display = 'none'; //desabilita botao salvar
        textoSobre.style.display = 'block'; //faz aparecer o texto
        campoInputSobre.style.display = 'none'; //faz desaparecer o campo
        textoSobre.innerText = campoInputSobre.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).
  
    } else {
        //se não, faz o texto antigo aparecer dnv e oculta o input, basicamente restaurando a pagina sem perder os dados antigos. Diferente da função window.location.reload(), que faz a pagina restaurar por inteiro
        const textoSobre = document.getElementById('pSobre');
        const campoInputSobre = document.getElementById('campoInputSobre');
        const btnSaveSobre = document.getElementById('btn-save-sobre');
        const btnEditSobre = document.getElementById('btn-edit-sobre');
  
        btnEditSobre.style.display = 'block'; //habilita botao editar
        btnSaveSobre.style.display = 'none'; //desabilita botao salvar
        textoSobre.style.display = 'block'; //faz aparecer o texto
        campoInputSobre.style.display = 'none'; //faz desaparecer o campo
    }
  }

