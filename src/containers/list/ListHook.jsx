import React, { useState, useEffect } from 'react';
import List from '../../components/list/List';
import { getAllCharacters } from '../../services/api';

const ListHook = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then((result) => {
        setList(result);
      });
  }, []);

  return (
    <List list={list} />
  );

};

export default ListHook;
