
const body = document.querySelector('body');
const botaoDarkMode = document.getElementById('botao-mudar-tema');
const ImagemBotao = document.getElementById('imagem-botao');

botaoDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    if(body.classList.contains('dark-mode')) {
        ImagemBotao.setAttribute('src', './assets/imgs/moon.png');
    } else {
        ImagemBotao.setAttribute('src', './assets/imgs/sun.png');
    }
});


const elementoPokemons = document.getElementById('lista-pokemon');

exibePokemons(pokemons);


function exibePokemons(listaPokemon) {
    
    listaPokemon.forEach(pokemon => {
        let tipo2 = pokemon.tipo.length > 1 ? pokemon.tipo[1] : '';
        elementoPokemons.innerHTML += `
        <li class="cartao-pokemon cartao-${pokemon.tipo[0]}">
          <div class="informacoes">
            <span>${pokemon.nome}</span>
            <span>${pokemon.numero}</span>
          </div>

          <img
            src="${pokemon.imagem}"
            alt="gif do pokemon ${pokemon.nome}"
            class="gif"
          />

          <ul class="tipos" id="tipos">
          <li class="tipo ${pokemon.tipo[0]}">${pokemon.tipo[0]}</li>
          <li class="tipo ${tipo2}">${tipo2}</li>
          </ul>

          <p class="descricao">
            ${pokemon.descricao}
          </p>
        </li>`
    });
};

// const elementoTipos = document.getElementById('tipos')
// function exibeTipos(tipos){
//     tipos.forEach(tipo => {
//         elementoTipos.innerHTML += `
//         <li class="tipo ${tipo}">${tipo}</li>
//         `
//     })
// }
