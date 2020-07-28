import { useState, useEffect } from 'react';
import { getAllCharacters } from '../services/api';

export const useListHook = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);


  useEffect(() => {
    getAllCharacters(pageNum)
      .then((result) => {
        setList(result);
      })
      .finally(() => setLoading(false));
  }, [pageNum]);

  const handlePage = ({ target }) => {
    if(target.value === 'next') setPageNum(page => page + 1);
    if(target.value === 'prev') setPageNum(page => page - 1);
  };

  return { 
    list,
    loading,
    pageNum,
    handlePage
  };
};
