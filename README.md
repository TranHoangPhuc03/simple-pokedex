# Simple Pokédex using PokéAPI

## Description

This project utilizes the PokéAPI and employs client-side rendering. When loading the Pokémon list, the website sends a request to the server. The server subsequently forwards this request to the API, which returns paginated Pokémon data. Following that, the server sends separate requests to the API for each Pokémon within the pagination, in order to retrieve more detailed information about each individual Pokémon. Finally, this information is sent back to the client.

## Getting Started

### Dependencies

* node.js
* Axios
* express.js
* express-handlebars

### Installing

```
# Set up a new node project
npm init

# Install packages
npm i axios express express-handlerbars
```

### Executing
```
npm start
```
or
```
node server.js
```

## Acknowledgments

Inspiration and PokéAPI
* [Pokédex](https://www.pokemon.com/us/pokedex)
* [PokéAPI](https://pokeapi.co/)