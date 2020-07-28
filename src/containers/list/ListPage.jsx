import React from 'react';
import List from '../../components/list/List';
import { useListHook } from '../../hooks/ListHook';

const ListPage = () => {
  const { list, loading, pageNum, handlePage } = useListHook();

  if(loading) return <h1>Loading</h1>;

  return (
    <>
      {pageNum > 1 && <button value='prev' onClick={handlePage}>Previous</button>} 
      {pageNum < 25 && <button value='next' onClick={handlePage}>Next</button>} 
      <List list={list} />
    </>
  );
};

export default ListPage;
