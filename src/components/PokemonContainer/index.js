import { useContext } from 'react';
import { PokemonContext } from '../../context/pokemonContext';
import Loader from 'react-loader-spinner';

import { PokemonWrapper, WrapperLoader } from './style';
import Pokemon from '../Pokemon/index';

const PokemonContainer = () => {
  const { pokemonState, loading } = useContext(PokemonContext);

  return (
    <PokemonWrapper>
      {!loading ? (
        <WrapperLoader>
          <Loader type='Audio' color='#1d1d1d' height={300} width={300} />
        </WrapperLoader>
      ) : (
        pokemonState.map((pokemon) => {
          return <Pokemon key={pokemon.data.id} {...pokemon} />;
        })
      )}
    </PokemonWrapper>
  );
};

export default PokemonContainer;
