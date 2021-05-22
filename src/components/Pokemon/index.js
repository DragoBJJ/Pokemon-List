import {
  WrapperItem,
  WrapperStats,
  PokemonName,
  PokemonStats,
  Image,
  Damage,
} from './style';

const Pokemon = ({ name, data }) => {
  const { base_experience, abilities, height, sprites, id } = data;

  return (
    <WrapperItem>
      <WrapperStats>
        <PokemonName>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </PokemonName>
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
            {item.ability.name}: {item.slot} <Damage>Hits</Damage>
          </PokemonStats>
        ))}
      </WrapperStats>
      <Image src={sprites.front_default} />
    </WrapperItem>
  );
};

export default Pokemon;
