"use client";

// React
import { ReactNode } from "react";
import { useState } from "react";

// Hooks
import { usePokemonList } from "@/hooks/usePokemonList";

// Components
import ListLoader from "@/components/ListLoader";
import { Button } from "@/components/ui/button";
import { PokemonCard } from "@/components/PokemonCard";

// Types
import { PokemonListItem } from "@/types/PokemonType";

interface Props {
  children: ReactNode;
}

export default function PokemonList() {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = usePokemonList(20, offset);

  return (
    <ListLoader loading={loading} error={error}>
      <div className="home-layout">
        {data.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
              {data.map((PokemonProps: PokemonListItem) => (
                <PokemonCard key={PokemonProps.id} data={PokemonProps} />
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <Button
                className=" disabled:opacity-50"
                disabled={offset === 0}
                onClick={() => setOffset((o) => o - 20)}
              >
                Prev
              </Button>
              <Button onClick={() => setOffset((o) => o + 20)}>Next</Button>
            </div>
          </>
        )}
      </div>
    </ListLoader>
  );
}
