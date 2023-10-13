
        function verificaInputs() {
            var tel = document.getElementById('telContatoDash').value;
            var email = document.getElementById('emailContatoDash').value;
            var endereco = document.getElementById('enderecoContatoDash').value;

            if (tel.length < 16 || email.length < 3 || endereco.length < 10) {
                alert('Preencha todos os campos corretamente');
                return false;
            }
            return true;
        }

        function editar() {
            // desabilita o botão de editar
            document.getElementById('botao-editar').disabled = true;

            // muda os elementos de texto da página para inputs
            var tel = document.getElementById('telContatoDash');
            tel.innerHTML = `<input type="tel" class="form-control" id="telContatoDash" placeholder="(45) 9 9999-0000" minlength="16" maxlength="16" required>`;

            var email = document.getElementById('emailContatoDash');
            email.innerHTML = `<input type="email" class="form-control" id="emailContatoDash" placeholder="exemplo@exemplo.com" minlength="3" required>`;

            var endereco = document.getElementById('enderecoContatoDash');
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
          return;
        }
        window.location.reload();
      }
    }

