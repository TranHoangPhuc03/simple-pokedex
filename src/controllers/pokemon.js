import pokemonAPI from '../apis/pokemonAPI.js';

const pokemonController = {

    getPaginated: async function (req, res) {
        const page = parseInt(req.params.page || 1);
        const data = await pokemonAPI.getPaginated(page);

        const pokemons = await Promise.all(data.results.map(async (pokemon) => {
            return await pokemonAPI.getPokemon(pokemon.name);
        }));

        res.send({
            pokemons: pokemons,
            next: data.next ? page + 1 : null,
            current: page,
        });
    },
}

export default pokemonController;