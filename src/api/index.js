import axios from 'axios';

const limit = 20;
const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

export const getPokemonData = async (setData) => {
  try {
    const { data } = await axios.get(API_URL);
    const { results } = data;

    const finish = await Promise.all(
      results.map(async (pokemon) => {
        try {
          const { data, status } = await axios.get(pokemon.url);

          return {
            name: pokemon.name,
            data,
            status,
          };
        } catch (error) {
          console.log(error);
        }
      })
    );
    setData(finish);
    return;
  } catch (error) {
    console.log(error);
  }
};
