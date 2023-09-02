const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;
const maxrecords = 151;

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>
    `
}

function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons=[]) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordNextPage = offset + limit 

    if(qtdRecordNextPage >= maxrecords){
        const newLimit = maxrecords - offset
        loadPokemonItems(offset, newLimit)
        //remove botao
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else{
        loadPokemonItems(offset, limit)
    }
    
})