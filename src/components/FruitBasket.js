import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, updateFilterCallback }) =>
      <div className="fruit-basket">
        <Filter 
          filters={filters}
          handleChange={updateFilterCallback} 
          />
        <FilteredFruitList
          fruit={fruit}
          filter={currentFilter} 
          />
      </div>;

FruitBasket.defaultProps = {
  filters: [],
  updateFilterCallback: () => {},
  fruit: [],
  filter: [],
  currentFilter: null,
}

export default FruitBasket;
