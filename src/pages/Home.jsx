import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const url = new URL("https://api.rawg.io/api/games");
        url.searchParams.append("key", API_KEY);
        url.searchParams.append("page", page);
        url.searchParams.append("page_size", 20);
        if (searchTerm) url.searchParams.append("search", searchTerm);
        if (selectedGenre) url.searchParams.append("genres", selectedGenre);

        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results || []);

        // Calculate total pages from the count (RAWG gives total count)
        if (data.count) setTotalPages(Math.ceil(data.count / 20));
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchGames, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm, selectedGenre, page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-500">🎮 VaultPixel</h1>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <SearchBar onSearch={setSearchTerm} />
        <GenreFilter onSelectGenre={setSelectedGenre} />
      </div>

      {/* Game Grid */}
      {loading ? (
        <p className="text-center text-gray-400">Loading games...</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-purple-600 disabled:opacity-50"
            >
            Previous
            </button>

            <span className="text-gray-400">
              Page <span className="text-white font-extrabold">{page}</span>  / {999}
            </span>

            <button
              onClick={handleNextPage}
              disabled={page === 999}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-purple-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
