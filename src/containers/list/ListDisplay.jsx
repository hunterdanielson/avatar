import React from 'react';
import List from '../../components/list/List';
import { useListHook } from '../../hooks/ListHook';

const ListDisplay = () => {
  const { list } = useListHook();

  return (
    <List list={list} />
  );
};

export default ListDisplay;
