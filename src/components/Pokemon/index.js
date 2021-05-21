import {
  WrapperItem,
  WrapperStats,
  PokemonName,
  PokemonStats,
  Image,
  Damage,
} from './style';

const Pokemon = ({ name, data }) => {
  const { base_experience, abilities, height, sprites } = data;

  return (
    <WrapperItem>
      <WrapperStats>
        <PokemonName>{name}</PokemonName>
        <PokemonStats>
          Experience: <Damage>{base_experience}</Damage>
        </PokemonStats>
        <PokemonStats>Height: {height}</PokemonStats>
        <PokemonStats up>Abilities: </PokemonStats>
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
