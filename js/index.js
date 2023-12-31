const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if(window.innerWidth < 450 ){
        window.scroll({top: 0, behavior: 'smoooth'});
    }

    removerSelecaoDoPersonagem();


    personagem.classList.add('selecionado');
    
    
    alterarImagemPersonagemSelecionado(personagem);


    alterarNomeDoPersonagem(personagem);

    alterarDescricaoDoPersonagem(personagem);
});
});

function alterarDescricaoDoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');


    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

