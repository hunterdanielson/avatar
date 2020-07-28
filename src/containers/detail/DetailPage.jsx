import React from 'react';
import Detail from '../../components/detail/Detail';
import { useDetailHook } from '../../hooks/DetailHook';


const DetailPage = () => {
  const { name, photoUrl, affiliation, allies, enemies } = useDetailHook();

  return (
    <Detail name={name} photoUrl={photoUrl} affiliation={affiliation} allies={allies} enemies={enemies} />
  );
};

export default DetailPage;
