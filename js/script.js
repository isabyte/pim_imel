
function verificaInputs() {
    var tel = document.getElementById('telContatoDash').value;
    var email = document.getElementById('emailContatoDash').value;
    var endereco = document.getElementById('enderecoContatoDash').value;

            if (tel.length < 16 || email.length < 3 || endereco.length < 10) {
                return false;
            }
            return true;
        }

function editar() {
    // tira margens da página
    var containerPerfil = document.getElementById('container-colunas').style;
    containerPerfil.marginLeft = "0px";
    containerPerfil.marginRight = "0px";

    // desabilita o botão de editar
    document.getElementById('botao-editar').disabled = true;

            // muda os elementos de texto da página para inputs
            var tel = document.getElementById('p-telContatoDash');
            tel.innerHTML = `<input type="tel" class="form-control" id="telContatoDash" placeholder="(45) 9 9999-0000" minlength="16" maxlength="16" required>`;

            var email = document.getElementById('p-emailContatoDash');
            email.innerHTML = `<input type="email" class="form-control" id="emailContatoDash" placeholder="exemplo@exemplo.com" minlength="3" required>`;

            var endereco = document.getElementById('p-enderecoContatoDash');
            endereco.innerHTML = `<input type="text" class="form-control" id="enderecoContatoDash" placeholder="Rua Tal Tal Tal, 123" minlength="10" required>
            <br/>
            <div class="botao-canto-direito">
              <button type="button" class="btn btn-secondary" onclick="cancelar()">Cancelar</button>
              <button type="submit" class="btn btn-azul" onclick="salvar()">Salvar alterações</button>
            </div>
            <br/>`
        }

  function cancelar() {
    if (confirm('Tem certeza que deseja cancelar? Todos os dados serão perdidos') == true) {
      window.location.reload();
    }
  }

        function salvar() {
      if (confirm('Deseja salvar as alterações?') == true) {
        if (!verificaInputs()) {
          alert('Preencha todos os campos corretamente');
          return;
        }
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
