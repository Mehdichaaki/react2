// PlayerItem.js
import React from 'react';

function PlayerItem({ player }) {
return (
    <li className="player-item">
    <img
        src={player.image}
        alt={`${player.fullname} Image`}
        className="player-image"
    />
    <div className="player-details">
        <div className="player-name">{player.fullname}</div>
        <div className="player-birth">
        <strong>Born:</strong> {player.born}
        </div>
        <div className="player-teams">
        <strong>First Team:</strong> {player.firstteam}
        <br />
        </div>
        <div className="player-goals">
        <strong>Total Goals:</strong> {player.goals}
        </div>
    </div>
    </li>
);
}

export default PlayerItem;
