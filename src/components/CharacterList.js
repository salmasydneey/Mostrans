import React, { useState, useEffect } from 'react';
import '../App.css';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Characters List</h1>
      <ul className="characters-list">
        {characters.map(character => (
          <li key={character.id} className="character-item">
            <img src={character.image} alt={character.name} className="character-img" />
            <p className="character-name">{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;