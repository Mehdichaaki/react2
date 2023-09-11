// PlayersList.js
import React from 'react';
import PlayerItem from './PlayerItem'; // Import the child component
import './Player.css';

const playersData = [
{
    fullname: 'MEssi',
    image: 'Images/messj.jpeg',
    born: 'January 1, 1980',
    firstteam: 'Barcalona',
    goals: 500,
},
{
    fullname: 'Neymar',
    image: 'Images/neymar.jpeg',
    born: 'February 2, 1985',
    firstteam: 'Barcalona',
    goals: 300,
},
  // Add more player objects as needed
];

function PlayersList() {
return (
    <div className="Player">
    <h1>List of Players</h1>
    <ul className="players-list">
        {playersData.map((player, index) => (
        <PlayerItem  player={player} />
        ))}
    </ul>
    </div>
);
}

export default PlayersList;
