import axios from 'axios';

const pokemonClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

const PokemonAPI = {
    getPaginated: async function (page) {
        const pokemonPerPage = 144;
        const offset = (page - 1) * pokemonPerPage;
        
        const response = await pokemonClient.get('/pokemon', {
            params: {
                limit: pokemonPerPage,
                offset: offset,
            },
        })
        
        return response.data;
    },

    getPokemon: async function (idOrName) {
        idOrName = idOrName.split(' ').join('-');

        var pokemon = (await pokemonClient.get(`/pokemon/${idOrName}`)).data;
        var types = pokemon.types.map(type => type.type.name);
        return {
            id: pokemon.id.toString().padStart(4, '0'),
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            types: types,
            sprite: pokemon.sprites.front_default,
        };
    },
}

export default PokemonAPI;