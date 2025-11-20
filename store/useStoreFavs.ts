import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { PokemonListItem } from "@/types/PokemonType";

interface FavoritesStore {
    items: PokemonListItem[];
    addFavorite: (data: PokemonListItem) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

const useStoreFavorites = create(
    persist<FavoritesStore>(
        (set, get) => ({
            items: [],
            addFavorite: (data: PokemonListItem) => {
                const currentItems = get().items;
                const existingItems = currentItems.some((item) => item.id === data.id);

                if (existingItems) {
                    return toast("This Pokemon is already in favorites! ❤️", {
                        action: {
                            label: "close",
                            onClick: () => toast.dismiss(this),
                        },
                    });
                }

                set({
                    items: [...get().items, data],
                });
                toast("💛 Pokemon added to favorites ❤️", {
                    action: {
                        label: "close",
                        onClick: () => toast.dismiss(this),
                    },
                });
            },
            removeFavorite: (id: number) => {
                set({
                    items: [...get().items.filter((item) => item.id !== id)],
                });
                toast.warning("Pokemon removed from favorites 😔", {
                    action: {
                        label: "close",
                        onClick: () => toast.dismiss(this),
                    },
                });
            },
            isFavorite: (id: number): boolean => {
                return get().items.some(item => item.id === id);
            },
        }),
        {
            name: "favoritesStorage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useStoreFavorites;
