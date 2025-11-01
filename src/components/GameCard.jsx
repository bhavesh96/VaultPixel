import React from "react";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link
      to={`/game/${game.id}`}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
    >
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white truncate">{game.name}</h2>
        <p className="text-sm text-gray-400 mt-1">⭐ {game.rating}</p>
      </div>
    </Link>
  );
}

export default GameCard;
