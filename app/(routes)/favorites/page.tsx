"use client";

//  components
import { PokemonCard } from "@/components/PokemonCard";

// Zustand Store
import useStoreFavorites from "@/store/useStoreFavs";

// Types
import { PokemonListItem } from "@/types/PokemonType";

export default function Favorites() {
  const { items } = useStoreFavorites();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
      {items.length === 0 && <p>There is no favorites yet.</p>}
      {items.length !== 0 &&
        items.map((product: PokemonListItem) => (
          <PokemonCard key={product.id} data={product} />
        ))}
    </div>
  );
}
