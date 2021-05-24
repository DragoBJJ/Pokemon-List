import { useState, useEffect, createContext } from 'react';
import { getPokemonData } from '../api';

export const PokemonContext = createContext([]);

export const PokemonProvider = ({ children }) => {
  const [pokemonState, setInitState] = useState([]);

  const [currentPokemonID, setID] = useState(null);
  const [currentPokemon, setCurrentPokemon] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemonData(setInitState).then(() => setLoading(true));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemonState,
        currentPokemonID,
        setID,
        currentPokemon,
        setCurrentPokemon,
        loading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
