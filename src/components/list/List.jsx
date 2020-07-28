import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ list }) => {
  const mappedList = list.map(item => {
    return <li key={item._id}>
      <h3>{item.name}</h3>
      <p>{item.affiliation}</p>
      <Link to={`/characters/${item._id}`} >Details</Link>
    </li>;
  });

  return <ul>
    {mappedList}
  </ul>;
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
