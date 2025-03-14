import { cache } from 'react';
import { PokemonCard } from '@/registry/new-york/complex-component/components/pokemon-card';
import { getPokemonList } from '@/registry/new-york/complex-component/lib/pokemon';

const getCachedPokemonList = cache(getPokemonList);

const Page = async () => {
  const pokemons = await getCachedPokemonList({ limit: 12 });

  if (!pokemons) {
    return null;
  }

  return (
    <div className='mx-auto w-full max-w-2xl px-4'>
      <div className='grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 md:grid-cols-4'>
        {pokemons.results.map(pokemon => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Page;
