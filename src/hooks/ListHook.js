import { useState, useEffect } from 'react';
import { getAllCharacters } from '../services/api';

export const useListHook = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((result) => {
        setList(result);
      });
  }, []);

  return { list };
};
