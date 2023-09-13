import React, { useState } from 'react';
import './filter.css'
import { practiceData } from '../../actions/practiceData';

const FilterLine = ({ onSearch, onSort, onTimeSearch, onRefresh }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSearchValue(value)
    onSearch(value)

  }
  return (
    <>
      <div className="filter-cont">
        <div className="filter-inp">
          <input type="text"
            placeholder='Filter data by name..'
            value={searchValue}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-drop">
          <div className="drop-head">Filter Time</div>
          <div className="drop-list">
            {practiceData.map((_, id) => {
              return (
                <>
                  <div onClick={() => onTimeSearch(`${id + 1} Pm PST`)}>{id + 1} Pm PST</div>
                </>
              )
            })}
          </div>
        </div>
        <div className="filter-drop filter-sort">
          <div className="sort-head">Sort BY</div>
          <div className="drop-list sort-list">
            <div onClick={() => onSort('A-Z')}>A-Z</div>
            <div onClick={() => onSort('Z-A')}>Z-A</div>
          </div>
        </div>
        <div className="filter-drop filter-sort">
          <div className="sort-head" onClick={onRefresh}>Refresh All</div>
        </div>
      </div>
    </>
  )
};

export default FilterLine;
