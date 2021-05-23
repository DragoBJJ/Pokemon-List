import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../context/pokemonContext';

import PokemonContainer from '../../components/PokemonContainer';
import DetailsContainer from '../../components/DetailsContainer';

import { WrapperHomePage } from './styles';

const HomePage = () => {
  const { pokemonState, currentPokemonID, currentPokemon, setCurrentPokemon } =
    useContext(PokemonContext);
  const [current] = currentPokemon;

  //Szukamy po naszym state konkretnego pokemona, dzięki wyłapanemu ID,
  // które  przekazaliśmy po kliknięciu na konkretną kartę.
  // Wszystkie dane są trzymane w  react Context,
  //abyśmy mieli dostęp do nich z każdego poziomu naszej aplikacji,
  //na wypadek gdyby nasz projekt w przyszłości został rozbudowany.

  useEffect(() => {
    const allPokemonData = pokemonState.map((item) => item.data);
    const finish = allPokemonData.filter(
      (item) => item.id === currentPokemonID
    );
    setCurrentPokemon(finish);
  }, [currentPokemonID, pokemonState, setCurrentPokemon]);

  return (
    <WrapperHomePage>
      <PokemonContainer />
      <DetailsContainer {...current} />
    </WrapperHomePage>
  );
};

export default HomePage;
