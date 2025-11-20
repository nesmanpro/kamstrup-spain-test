"use client";

import { GET_POKEMON_LIST } from "@/graphql/queries";
import { PokemonListResponse } from "@/types/PokemonType";
import { useQuery } from "@apollo/client/react";

export function usePokemonList(limit: number = 20, offset: number = 0) {
  const { data, loading, error } = useQuery<PokemonListResponse>(
    GET_POKEMON_LIST,
    {
      variables: { limit, offset },
    }
  );

  return {
    loading,
    error,
    data: data?.pokemon ?? [],
  };
}
