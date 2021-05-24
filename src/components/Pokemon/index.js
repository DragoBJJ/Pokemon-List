import { useState, useContext } from 'react';

import { Link, animateScroll as Scroll } from 'react-scroll';

import { PokemonContext } from '../../context/pokemonContext';

import {
  WrapperItem,
  WrapperStats,
  PokemonName,
  PokemonStats,
  Image,
  Damage,
  Button,
} from './style';

const Pokemon = ({ name, data, status = null }) => {
  const { base_experience, abilities, height, sprites, id } = data;

  const [isVisible, setVisible] = useState(false);

  const { setID } = useContext(PokemonContext);

  return (
    <WrapperItem>
      <PokemonName>{name.charAt(0).toUpperCase() + name.slice(1)}</PokemonName>
      {isVisible && (
        <WrapperStats>
          <PokemonStats>
            Status:{' '}
            {status === 200 ? (
              <Damage green>{status}</Damage>
            ) : (
              <Damage>{status}</Damage>
            )}
          </PokemonStats>
          <PokemonStats>
            Experience: <Damage green>{base_experience}</Damage>
          </PokemonStats>
          <PokemonStats>
            Height: <Damage green> {height}</Damage>
          </PokemonStats>
          <PokemonStats up>
            <Damage>Abilities</Damage>
          </PokemonStats>
          {abilities.map((item, index) => (
            <PokemonStats key={index}>
              {item.ability.name}: {item.slot} <Damage>Hit</Damage>
            </PokemonStats>
          ))}
        </WrapperStats>
      )}

      <Image src={sprites.front_default} />
      <Button onClick={() => setVisible((prevState) => !prevState)}>
        {isVisible ? 'Hidden' : 'Show'}
      </Button>
      <Button
        as={Link}
        to='Details'
        duration={1000}
        smooth={true}
        spy={true}
        activeClass='active'
        left
        onClick={() => setID(id)}
      >
        Transfer
      </Button>
    </WrapperItem>
  );
};

export default Pokemon;
