# Kamstrup Spain - Technical Test

This project is a technical test built with **React and NextJS**, consuming the public **PokéAPI** to display Pokémon information, allow navigation to detailed views, and manage a favorites system with persistence.

---

## 🚀 Features

### 📋 Pokémon List

- Displays a list of Pokémon with:

  - Number
  - Name
  - Types

- Shows **20 Pokémon per request**.
- Includes **pagination** to load more results.
- Clicking on a Pokémon redirects to a **detail page**.

### 🔎 Pokémon Detail View

Each detailed page includes:

- Official Artwork
- Number and Name
- Types
- List of Moves
- Stats:

  - HP
  - Attack
  - Defense
  - Special Attack
  - Special Defense
  - Speed

### ⭐ Favorites

- Mark or unmark Pokémon as **favorite**.
- Favorites persist while navigating the app.
- Dedicated **Favorites Page**.
- Ability to remove Pokémon from favorites.

---

## 🛠️ Tech Stack

- **React**
- **NextJS**
- **Typescript**
- **Zustand**
- **Tailwind CSS**
- **Apollo**
- **Graphql**
- **PokéAPI**

---

## 📦 Installation

```bash
Copy the environment variable into a .env file.
npm install
npm run dev
```

---

## 📁 Project Structure

```
  app/
  components/
  graphql/
  hooks/
  lib/
  store/
```

---

## 🌐 API

This project consumes the public PokéAPI: [https://pokeapi.co](https://pokeapi.co)

you must provide the following endpoint in a `.env` file:

```bash
NEXT_PUBLIC_API_BASE_URL="https://graphql.pokeapi.co/v1beta2"
```

---

## 📝 Notes

This repository was created as part of a technical test for Kamstrup Spain.
