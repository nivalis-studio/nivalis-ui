'use client';

// Totally unnecessary hook, but it's a good example of how to use a hook in a custom registry.

export const usePokemonImage = (number: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};
