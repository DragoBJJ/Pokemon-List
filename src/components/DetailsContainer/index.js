import { DetailsWrapper, Image, Header } from './style';

import { WrapperStats, PokemonStats, Damage } from '../Pokemon/style';

const DetailsContainer = ({
  name,
  abilities,
  sprites,
  height,
  weight,
  base_experience,
  stats,
}) => {
  return (
    <DetailsWrapper>
      {name && (
        <>
          <WrapperStats>
            <PokemonStats>
              Experience: <Damage green>{base_experience}</Damage>
            </PokemonStats>
            <PokemonStats>
              height: <Damage green> {height}</Damage>
            </PokemonStats>
            <PokemonStats>
              Weight: <Damage green> {weight}</Damage>
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
          <Header>{name}</Header>
          <WrapperStats>
            <PokemonStats>
              <Damage>STATS</Damage>
            </PokemonStats>
            {stats.map((item, index) => (
              <PokemonStats key={index}>
                {item.stat.name}: <Damage>{item.base_stat}</Damage>
              </PokemonStats>
            ))}
          </WrapperStats>
          <Image src={sprites.front_default} alt='pokemon' />
        </>
      )}
    </DetailsWrapper>
  );
};

export default DetailsContainer;
