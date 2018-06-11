import React from 'react';

const Filter = ({ filters, handleChange }) => 
  <select onChange={handleChange}>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>;

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
};

export default Filter;