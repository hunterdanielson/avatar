import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, affiliation, allies, enemies }) => (
  <div>
    <h1>{name}</h1>
    <h2>{affiliation}</h2>
    <h3>Allies</h3>
    <ul>
      {allies.map(ally => <li key={ally}>{ally}</li>)}
    </ul>
    <h3>Enemies</h3>
    <ul>
      {enemies.map(enemy => <li key={enemy}>{enemy}</li>)}
    </ul>
  </div>

);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.arrayOf(PropTypes.string),
  enemies: PropTypes.arrayOf(PropTypes.string)
};

export default Detail;


