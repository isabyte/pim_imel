function cancelar() {
    if(confirm('Tem certeza que deseja cancelar? Todos os dados serão perdidos') == true) {
      window.location.reload();
    }
  }

  function salvar() {
    if(!verificaInputs()) {
      return;
    }

    if(confirm('Deseja salvar as alterações?') == true) {
      window.location.reload(); 
    }
  }

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