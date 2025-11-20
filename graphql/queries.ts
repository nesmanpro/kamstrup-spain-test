import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query GetPokemonList($limit: Int, $offset: Int) {
  pokemon(limit: $limit, offset: $offset, order_by: {id: asc}) {
    id
    name
    pokemontypes {
        type {
          name
        }
      }
      pokemonsprites {
          sprites 
      }
  }
}
`;



export const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
  pokemon(where: { name: { _eq: $name } }) {
    id
    name
    height
    weight
    pokemonstats {
      base_stat
      effort
        stat{
          name
        }
      }
    pokemonmoves {
      move {
        name
      }
    } 
    pokemontypes {
        type {
          name
        }
      }
      pokemonsprites {
        sprites
      }
  }
}
`;