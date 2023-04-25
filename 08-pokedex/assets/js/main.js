const pokemonList = document.getElementById('pokemonList') // lista que está no HTML e atribui como variável
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonFilter = document.getElementById('pokemonFilter')
const limit = 4
let offset = 0;

function convertTypeToLi() {
    return `
        <li class="filterTypes">
            <span class="type">Sucesso1</span>
        </li>
`;

} /* ${pokemon.types.map((type) => type)} */

function typesHtml() {
    // pokeApi.getPokemons().then((pokemonsDetails = []) => {
    const filterHtml = convertTypeToLi();
    pokemonFilter.innerHTML += filterHtml;
}

typesHtml()

function convertPokemonToLi(pokemon) {
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

function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}
loadMorePokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadMorePokemons(offset, limit)
})