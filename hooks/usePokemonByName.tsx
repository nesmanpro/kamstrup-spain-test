"use client";
import { GET_POKEMON_BY_NAME } from "@/graphql/queries";
import { PokemonQueryResult } from "@/types/PokemonType";
import { useQuery } from "@apollo/client/react";

export function usePokemonByName(name: string) {
  const { data, loading, error } = useQuery<PokemonQueryResult>(
    GET_POKEMON_BY_NAME,
    {
      variables: { name },
    }
  );

  return {
    loading,
    error,
    data,
  };
}
