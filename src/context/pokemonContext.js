import { useState, useEffect, createContext, useReducer } from 'react';
import { getPokemonData } from '../api';
import { contextReducer } from './contextReducer';

export const PokemonContext = createContext([]);

export const PokemonProvider = ({ children }) => {
  const [initState, setInitState] = useState([]);

  useEffect(() => {
    getPokemonData(setInitState);
  }, []);

  const [state, dispatch] = useReducer(contextReducer, initState);

  return (
    <PokemonContext.Provider value={{ pokemonState: initState }}>
      {children}
    </PokemonContext.Provider>
  );
};
