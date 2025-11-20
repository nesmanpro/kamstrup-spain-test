#Objective

Build an application using the React library that consumes the public Pokemon API (https://pokeapi.co) and allows users to explore Pokémon information. You may use other libraries if necessary.

Create a file .env with:
NEXT_PUBLIC_API_BASE_URL="https://graphql.pokeapi.co/v1beta2"

#Requirements

Pokemon List
✅ Display a list with each Pokémon's number, name, and types (showing 20 pokemon per request)
✅ Implement pagination or infinite scroll to load more results.
✅ Clicking on a Pokémon should navigate to a detailed view with more information.

#Detailed View

Display the following Pokémon details:
✅ Number and Name
✅ Official Image
✅ Types
✅List of Moves
✅ Stats:
• HP
• Attack
• Defense
• Special Attack
• Special Defense
• Speed

#Favorites

✅ Allow marking Pokemon as favorite.
✅ Favorites should persist when navigating between pages.
✅ There must be a dedicated page to view favorited Pokemon.
✅ It must be possible to remove a Pokemon from favorites.
