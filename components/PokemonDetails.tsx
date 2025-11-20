// Components
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

// Icons
import { Bookmark, Heart } from "lucide-react";

// Types
import { PokemonListItem } from "@/types/PokemonType";

// Zustand Store
import useStoreFavorites from "@/store/useStoreFavs";

export function PokemonDetails(props: { data: PokemonListItem }) {
  const { id, name, pokemon_v2_pokemontypes, pokemon_v2_pokemonsprites } =
    props?.data;

  const { addFavorite, isFavorite, removeFavorite } = useStoreFavorites();

  return (
    <Card className="w-60 cursor-pointer bg-gray-100 hover:scale-105 duration-300 ease-in-out">
      <CardHeader className="relative bg-white">
        <span className="absolute bg-gray-200 w-6 h-6 flex justify-center items-center rounded-full text-gray-900 top-2.5 right-2.5 font-semibold">
          {id}
        </span>
        {isFavorite(id) && (
          <span className="absolute  w-6 h-6 flex justify-center items-center rounded-full top-2.5 left-2.5">
            <Bookmark />
          </span>
        )}
        <img
          className="w-full object-cover"
          src={pokemon_v2_pokemonsprites[0].sprites.front_default}
          alt={`Profile image of the pokemon named ${name}`}
        />
      </CardHeader>
      <CardFooter className="flex flex-col justify-between h-full ">
        <div className="flex flex-col items-centerw-full">
          <CardTitle className="capitalize mb-5 text-center text-xl">
            {name}
          </CardTitle>
          <CardDescription className="flex justify-evenly gap-3 items-end">
            {pokemon_v2_pokemontypes.map((type) => (
              <span
                key={type.pokemon_v2_type.name}
                className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full capitalize"
              >
                {type.pokemon_v2_type.name}
              </span>
            ))}
          </CardDescription>
        </div>
        <div className="flex items-end justify-around mt-5 w-full">
          {isFavorite(id) ? (
            <Button
              variant="outline"
              onClick={() => removeFavorite(id)}
              className="cursor-pointer "
            >
              <Heart size={20} className="fill-gray-900" />
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => addFavorite(props?.data)}
              className="cursor-pointer "
            >
              <Heart size={20} />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
