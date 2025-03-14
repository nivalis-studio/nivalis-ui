'use client';

import { usePokemonImage } from '@/registry/new-york/complex-component/hooks/use-pokemon';

export const PokemonImage = ({
  name,
  number,
}: {
  readonly name: string;
  readonly number: number;
}) => {
  const imageUrl = usePokemonImage(number);

  if (!imageUrl) {
    return null;
  }

  // eslint-disable-next-line nextjs/no-img-element
  return <img src={imageUrl} alt={name} />;
};
