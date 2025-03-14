import { z } from 'zod';

const LIMIT = 10;

export const getPokemonList = async ({ limit = LIMIT }: { limit?: number }) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
    );

    return z
      .object({
        results: z.array(z.object({ name: z.string() })),
      })
      .parse(await response.json());
  } catch (error) {
    console.error(error);

    return null;
  }
};

export const getPokemon = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      throw new Error('Failed to fetch pokemon');
    }

    return z
      .object({
        name: z.string(),
        id: z.number(),
        sprites: z.object({
          front_default: z.string(),
        }),
        stats: z.array(
          z.object({
            base_stat: z.number(),
            stat: z.object({
              name: z.string(),
            }),
          }),
        ),
      })
      .parse(await response.json());
  } catch (error) {
    console.error(error);

    return null;
  }
};
