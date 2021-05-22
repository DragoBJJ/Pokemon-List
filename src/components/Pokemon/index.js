import { useState } from 'react';
import {
  WrapperItem,
  WrapperStats,
  PokemonName,
  PokemonStats,
  Image,
  Damage,
  Button,
} from './style';

const Pokemon = ({ name, data, status }) => {
  const { base_experience, abilities, height, sprites, id } = data;

  const [isVisible, setVisible] = useState(false);

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
    </WrapperItem>
  );
};

export default Pokemon;
