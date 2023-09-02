
function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon pokemon__type--grass">
        <span class="number">#003</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="assets/images/bulbasaur.png">
        </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons=[]) => {

        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})