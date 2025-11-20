export interface PokemonType {
    type: {
        name: string;
    };
}
export interface PokemonSprite {
    sprites: {
        front_default: string;
    }
}

export interface PokemonListItem {
    id: number;
    name: string;
    pokemontypes
    : PokemonType[];
    pokemonsprites: PokemonSprite[];
}

export interface PokemonListResponse {
    pokemon: PokemonListItem[];
}


export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
    }
}


export interface PokemonMove {
    move: {
        name: string;
    }
}


export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    pokemonmoves: PokemonMove[];
    pokemonsprites: PokemonSprite[];
    pokemonstats: PokemonStat[];
    pokemontypes: PokemonType[];
}

export interface PokemonQueryResult {
    pokemon: PokemonDetails[];
}