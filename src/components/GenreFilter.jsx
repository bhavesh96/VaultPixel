import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function GenreFilter({ onSelectGenre }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
      const data = await res.json();
      setGenres(data.results || []);
    };
    fetchGenres();
  }, []);

  return (
    <select
      onChange={(e) => onSelectGenre(e.target.value)}
      className="w-full sm:w-48 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
    >
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.slug}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;
