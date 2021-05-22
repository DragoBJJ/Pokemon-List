import { useState, useEffect, createContext } from 'react';
import { getPokemonData } from '../api';

export const PokemonContext = createContext([]);

export const PokemonProvider = ({ children }) => {
  const [initState, setInitState] = useState([]);

  useEffect(() => {
    getPokemonData(setInitState);
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonState: initState }}>
      {children}
    </PokemonContext.Provider>
  );
};
