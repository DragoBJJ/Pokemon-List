import { useState, useEffect, createContext } from 'react';
import { getPokemonData } from '../api';

export const PokemonContext = createContext([]);

export const PokemonProvider = ({ children }) => {
  const [pokemonState, setInitState] = useState([]);
  const [currentPokemonID, setID] = useState(null);
  const [currentPokemon, setCurrentPokemon] = useState([]);

  useEffect(() => {
    getPokemonData(setInitState);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemonState,
        currentPokemonID,
        setID,
        currentPokemon,
        setCurrentPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
