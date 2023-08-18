var page = 1;
var btnLoadMore = document.getElementById('load-more-pokemon');
var loader = document.querySelector('.loader');

const pokemonTypes = {
    'normal': 'Normal',
    'fire': 'Fire',
    'water': 'Water',
    'grass': 'Grass',
    'electric': 'Electric',
    'ice': 'Ice',
    'fighting': 'Fighting',
    'poison': 'Poison',
    'ground': 'Ground',
    'flying': 'Flying',
    'psychic': 'Psychic',
    'bug': 'Bug',
    'rock': 'Rock',
    'ghost': 'Ghost',
    'dark': 'Dark',
    'dragon': 'Dragon',
    'steel': 'Steel',
    'fairy': 'Fairy',
}

function handlerLoadMoreClick() {
    loader.classList.remove('d-none');
    btnLoadMore.classList.add('d-none');

    getPaginated();
}

function getPaginated() {
    var xhttp = new XMLHttpRequest();
    const URL = `pokemon/${page}`;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loader.classList.add('d-none');
            btnLoadMore.classList.remove('d-none');

            var data = JSON.parse(this.responseText);
            var pokemons = data.pokemons;
            var next = data.next;

            pokemons.forEach(pokemon => createPokemonCard(pokemon));

            if (data.next) {
                page = next;
            }
            else {
                btnLoadMore.classList.add('d-none');
            }
        }
    }

    xhttp.open('GET', URL, true);
    xhttp.send();
}

function createPokemonCard(pokemon) {
    var htmlTypes = '';
    pokemon.types.forEach(type => {
        htmlTypes += `<p class="card-type__item bg-type-${type}">${pokemonTypes[type]}</p>`;
    });
    var htmlCard = `
        <div class="card">
            <img src="${pokemon.sprite}" alt="${pokemon.name}}">
            <div class="card-body">
                <span class="card-id">#${pokemon.id}</span>
                <p class="card-name">${pokemon.name}</p>
                <div class="card-types">
                    ${htmlTypes}
                </div>
            </div>
        </div>
    `;

    var divCard = document.createElement('div');
    divCard.innerHTML = htmlCard;

    document.querySelector('.card-list').appendChild(divCard);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('load-more-pokemon').click();
});

