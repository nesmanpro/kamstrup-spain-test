"use client";
// NextJS
import { useParams } from "next/navigation";

// hooks
import { usePokemonByName } from "@/hooks/usePokemonByName";

// Zustand Store
import useStoreFavorites from "@/store/useStoreFavs";

// components
import SkeletonDetails from "@/components/skeletons/SkeletonDetails";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Props {
  params: {
    name: string;
  };
}

export default function PokemonDetailPage() {
  const params = useParams();
  const pokemonName = params?.name;
  const { addFavorite, isFavorite, removeFavorite } = useStoreFavorites();

  if (!pokemonName || Array.isArray(pokemonName)) return <p>Cargando...</p>;
  const { data, loading, error } = usePokemonByName(pokemonName);
  const pokemon = data?.pokemon?.[0];

  if (!pokemon || loading || error) return <SkeletonDetails />;
  return (
    <main className="flex flex-col md:flex-row items-center w-full mb-20">
      <div className="w-[300px] md:w-64 aspect-square flex-1/2 md:flex-1/3 flex flex-col items-center">
        <img
          className="h-full w-full object-cover object-center "
          src={pokemon?.pokemonsprites[0].sprites.front_default}
          alt={`Profile image of the pokemon ${pokemon?.name}`}
        />
        {isFavorite(pokemon?.id) ? (
          <Button
            variant="outline"
            onClick={() => removeFavorite(pokemon?.id)}
            className="cursor-pointer"
          >
            Remove fav
            <Heart size={20} className="fill-gray-900" />
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={() => addFavorite(pokemon)}
            className="cursor-pointer "
          >
            Add fav
            <Heart size={20} />
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-10 flex-1/2 md:flex-2/3 mt-20 md:mt-0">
        <div className="flex justify-between items-center w-full ">
          <h1 className="font-bold text-xl md:text-2xl uppercase">
            {pokemon?.name}
          </h1>
          <h2 className="font-bold text-md md:text-xl ">
            ID Number: {pokemon?.id}
          </h2>
        </div>
        <div className="font-semibold text-xs md:text-md flex items-center gap-5 uppercase">
          Types:
          {pokemon?.pokemontypes?.map((type) => (
            <span
              className="py-1 px-3  rounded-2xl bg-amber-700 text-white"
              key={type.type.name}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="font-semibold text-xs flex items-start gap-5 uppercase">
          <span>Moves:</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {pokemon?.pokemonmoves?.slice(0, 10).map((move, idx) => (
              <span className="text-xs text-sky-700 text-wrap w-full" key={idx}>
                {move.move.name}
              </span>
            ))}
          </div>
        </div>
        <div className="font-semibold text-xs flex items-start gap-5 uppercase">
          <span>Stats:</span>
          <div className="grid grid-cols-2 gap-5">
            {pokemon?.pokemonstats?.map((stat) => (
              <div
                className="text-xs text-green-700 text-wrap w-full flex gap-2 items-center"
                key={stat.stat.name}
              >
                <span>{stat.stat.name}:</span>
                <span>{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
