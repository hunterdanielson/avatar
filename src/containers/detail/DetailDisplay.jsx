import React from 'react';
import Detail from '../../components/detail/Detail';
import { useDetailHook } from '../../hooks/DetailHook';


const DetailDisplay = () => {
  const { name, affiliation, allies, enemies } = useDetailHook();

  return (
    <Detail name={name} affiliation={affiliation} allies={allies} enemies={enemies} />
  );

};

export default DetailDisplay;
