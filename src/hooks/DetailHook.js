import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../services/api';

export const useDetailHook = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [allies, setAllies] = useState([]);
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    getCharacter(id)
      .then(({ name, photoUrl, affiliation, allies, enemies }) => {
        setName(name);
        setPhotoUrl(photoUrl);
        setAffiliation(affiliation);
        setAllies(allies);
        setEnemies(enemies);
      });
  }, []);

  return {
    name,
    photoUrl,
    affiliation,
    allies,
    enemies
  };
};

