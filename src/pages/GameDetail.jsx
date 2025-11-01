import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
      const data = await res.json();
      setGame(data);
    };
    fetchGame();
  }, [id]);

  if (!game) return <p className="text-center text-gray-400 mt-10">Loading game details...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-purple-400 hover:underline mb-4 block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-purple-500 mb-4">{game.name}</h1>
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full rounded-lg mb-6 shadow-lg"
      />
      <p className="text-gray-300 mb-4">{game.description_raw}</p>
      <p className="text-gray-400 mb-2">⭐ Rating: {game.rating}</p>
      <p className="text-gray-400 mb-2">
        🎮 Platforms:{" "}
        {game.platforms.map((p) => p.platform.name).join(", ")}
      </p>
      <p className="text-gray-400">
        🏷️ Genres: {game.genres.map((g) => g.name).join(", ")}
      </p>
    </div>
  );
}

export default GameDetail;
