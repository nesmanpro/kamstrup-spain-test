"use client";
import useStoreFavorites from "@/store/useStoreFavs";
import Link from "next/link";

export default function NavBar() {
  const { items } = useStoreFavorites();
  return (
    <div className="h-20 flex flex-col sm:flex-row justify-between items-center md:max-w-3xl lg:max-w-5xl w-full my-10 sm:my-0 px-20 lg:px-0">
      <span>
        <h1 className="font-bold text-2xl">Pokemons</h1>
      </span>
      <ul className="flex gap-7 items-center">
        <li className="cursor-pointer">
          <Link href="/">Pokemon List</Link>
        </li>
        <li className="cursor-pointer ">
          <Link href="/favorites">Favorites</Link>
          <span className="p-1 ml-2 bg-gray-800 rounded-full text-white">
            {items?.length || "0"}
          </span>
        </li>
      </ul>
    </div>
  );
}
