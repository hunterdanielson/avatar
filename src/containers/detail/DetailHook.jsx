import React, { useState, useEffect } from 'react';
import Detail from '../../components/detail/Detail';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../services/api';

const DetailHook = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [allies, setAllies] = useState([]);
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    getCharacter(id)
      .then(({ name, affiliation, allies, enemies }) => {
        setName(name);
        setAffiliation(affiliation);
        setAllies(allies);
        setEnemies(enemies);
      });
  }, []);

  return (
    <Detail name={name} affiliation={affiliation} allies={allies} enemies={enemies} />
  );

};

export default DetailHook;
