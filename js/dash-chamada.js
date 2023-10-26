/*CHAMADA DASHBOARD */
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
    const texto = document.getElementById('texto');
    const campoInput = document.getElementById('campoInput');
    const btnSaveJust = document.getElementById('btn-save-just');
    const btnEditJust = document.getElementById('btn-edit-just');

    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
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
/*FIM CHAMADA DASHBOARD*/


/*CHAMADA DASHBOARD 2*/
function editarJustificativa2() {
    const texto = document.getElementById('texto2');
    const campoInput = document.getElementById('campoInput2');
    const btnSaveJust = document.getElementById('btn-save-just2');
    const btnEditJust = document.getElementById('btn-edit-just2');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa2() {
    const texto = document.getElementById('texto2');
    const campoInput = document.getElementById('campoInput2');
    const btnSaveJust = document.getElementById('btn-save-just2');
    const btnEditJust = document.getElementById('btn-edit-just2');

    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP2(){
        const botaoChamadaP= document.getElementById('btn-chamadaP2');
        const botaoChamadaF= document.getElementById('btn-chamadaF2');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF2(){
     const botaoChamadaP= document.getElementById('btn-chamadaP2');
        const botaoChamadaF= document.getElementById('btn-chamadaF2');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/



/*CHAMADA DASHBOARD 3*/
function editarJustificativa3() {
    const texto = document.getElementById('texto3');
    const campoInput = document.getElementById('campoInput3');
    const btnSaveJust = document.getElementById('btn-save-just3');
    const btnEditJust = document.getElementById('btn-edit-just3');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa3() {
    const texto = document.getElementById('texto3');
        const campoInput = document.getElementById('campoInput3');
        const btnSaveJust = document.getElementById('btn-save-just3');
        const btnEditJust = document.getElementById('btn-edit-just3');

    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP3(){
        const botaoChamadaP= document.getElementById('btn-chamadaP3');
        const botaoChamadaF= document.getElementById('btn-chamadaF3');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF3(){
     const botaoChamadaP= document.getElementById('btn-chamadaP3');
        const botaoChamadaF= document.getElementById('btn-chamadaF3');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/

/*CHAMADA DASHBOARD 4*/
function editarJustificativa4() {
    const texto = document.getElementById('texto4');
    const campoInput = document.getElementById('campoInput4');
    const btnSaveJust = document.getElementById('btn-save-just4');
    const btnEditJust = document.getElementById('btn-edit-just4');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa4() {
    const texto = document.getElementById('texto4');
    const campoInput = document.getElementById('campoInput4');
    const btnSaveJust = document.getElementById('btn-save-just4');
    const btnEditJust = document.getElementById('btn-edit-just4');
    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP4(){
        const botaoChamadaP= document.getElementById('btn-chamadaP4');
        const botaoChamadaF= document.getElementById('btn-chamadaF4');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF4(){
     const botaoChamadaP= document.getElementById('btn-chamadaP4');
        const botaoChamadaF= document.getElementById('btn-chamadaF4');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/


/*CHAMADA DASHBOARD 5*/
function editarJustificativa5() {
    const texto = document.getElementById('texto5');
    const campoInput = document.getElementById('campoInput5');
    const btnSaveJust = document.getElementById('btn-save-just5');
    const btnEditJust = document.getElementById('btn-edit-just5');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativ5() {
    const texto = document.getElementById('texto5');
        const campoInput = document.getElementById('campoInput5');
        const btnSaveJust = document.getElementById('btn-save-just5');
        const btnEditJust = document.getElementById('btn-edit-just5');
    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP5(){
        const botaoChamadaP= document.getElementById('btn-chamadaP5');
        const botaoChamadaF= document.getElementById('btn-chamadaF5');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF5(){
     const botaoChamadaP= document.getElementById('btn-chamadaP5');
        const botaoChamadaF= document.getElementById('btn-chamadaF5');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/


/*CHAMADA DASHBOARD 6*/
function editarJustificativa6() {
    const texto = document.getElementById('texto6');
    const campoInput = document.getElementById('campoInput6');
    const btnSaveJust = document.getElementById('btn-save-just6');
    const btnEditJust = document.getElementById('btn-edit-just6');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa6() {
    const texto = document.getElementById('texto6');
    const campoInput = document.getElementById('campoInput6');
    const btnSaveJust = document.getElementById('btn-save-just6');
    const btnEditJust = document.getElementById('btn-edit-just6');

    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP6(){
        const botaoChamadaP= document.getElementById('btn-chamadaP6');
        const botaoChamadaF= document.getElementById('btn-chamadaF6');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF6(){
     const botaoChamadaP= document.getElementById('btn-chamadaP6');
        const botaoChamadaF= document.getElementById('btn-chamadaF6');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/


/*CHAMADA DASHBOARD 7*/
function editarJustificativa7() {
    const texto = document.getElementById('texto7');
    const campoInput = document.getElementById('campoInput7');
    const btnSaveJust = document.getElementById('btn-save-just7');
    const btnEditJust = document.getElementById('btn-edit-just7');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa7() {
        const texto = document.getElementById('texto7');
        const campoInput = document.getElementById('campoInput7');
        const btnSaveJust = document.getElementById('btn-save-just7');
        const btnEditJust = document.getElementById('btn-edit-just7');
    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP7(){
        const botaoChamadaP= document.getElementById('btn-chamadaP7');
        const botaoChamadaF= document.getElementById('btn-chamadaF7');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF7(){
     const botaoChamadaP= document.getElementById('btn-chamadaP7');
        const botaoChamadaF= document.getElementById('btn-chamadaF7');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/



/*CHAMADA DASHBOARD 8*/
function editarJustificativa8() {
    const texto = document.getElementById('texto8');
    const campoInput = document.getElementById('campoInput8');
    const btnSaveJust = document.getElementById('btn-save-just8');
    const btnEditJust = document.getElementById('btn-edit-just8');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa8() {
    const texto = document.getElementById('texto8');
    const campoInput = document.getElementById('campoInput8');
    const btnSaveJust = document.getElementById('btn-save-just8');
    const btnEditJust = document.getElementById('btn-edit-just8');
    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP8(){
        const botaoChamadaP= document.getElementById('btn-chamadaP8');
        const botaoChamadaF= document.getElementById('btn-chamadaF8');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF8(){
     const botaoChamadaP= document.getElementById('btn-chamadaP8');
        const botaoChamadaF= document.getElementById('btn-chamadaF8');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/


/*CHAMADA DASHBOARD 9*/
function editarJustificativa9() {
    const texto = document.getElementById('texto9');
    const campoInput = document.getElementById('campoInput9');
    const btnSaveJust = document.getElementById('btn-save-just9');
    const btnEditJust = document.getElementById('btn-edit-just9');

    btnEditJust.style.display = 'none'; //desabilita botao editar
    btnSaveJust.style.display = 'block';//habilita botao salvar
    texto.style.display = 'none'; //acessa o css do ID, deixando o display como "none", ou seja, invisível
    campoInput.style.display = 'block'; //nesse caso, faz o campo aparecer
    campoInput.value = texto.innerText; //recebe ou define o texto do input a partir do ID dele(nesse caso ta recebendo)
}

function salvarJustificativa9() {
    const texto = document.getElementById('texto9');
    const campoInput = document.getElementById('campoInput9');
    const btnSaveJust = document.getElementById('btn-save-just9');
    const btnEditJust = document.getElementById('btn-edit-just9');

    if (confirm('Deseja salvar as alterações?') == true) {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
        texto.innerText = campoInput.value; //seguinte situação: vc muda o que ta escrito no campo("o innertext" do caso), logo, aqui ele devolve o novo valor para o campo de edição, atualizando o valor dele e fazendo com que apareça a nova frase digitada(o "novo innertext". Lembrando q innertext é só uma função do js, como a innerHTML).

    } else {
        btnEditJust.style.display = 'block'; //habilita botao editar
        btnSaveJust.style.display = 'none'; //desabilita botao salvar
        texto.style.display = 'block'; //faz aparecer o texto
        campoInput.style.display = 'none'; //faz desaparecer o campo
    }
}

function chamadaP9(){
        const botaoChamadaP= document.getElementById('btn-chamadaP9');
        const botaoChamadaF= document.getElementById('btn-chamadaF9');

        botaoChamadaP.style.display = 'none'; 
        botaoChamadaF.style.display = 'block'; 
       
}

function chamadaF9(){
     const botaoChamadaP= document.getElementById('btn-chamadaP9');
        const botaoChamadaF= document.getElementById('btn-chamadaF9');

    botaoChamadaP.style.display = 'block';
    botaoChamadaF.style.display = 'none';
}
/*FIM CHAMADA DASHBOARD*/