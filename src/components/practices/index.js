import React, { useEffect, useState } from 'react';
import { practiceData } from '../../actions/practiceData';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import './p.css'
import FilterLine from '../filterHeader';

const Practice = () => {
  const [data, setData] = useState(practiceData);
  const [starStatus, setStarStatus] = useState([])
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setStarStatus(Array(data.length).fill(false));
    setFilteredData(data)

    //let's make star icon to be maintained if the item is stored in localStorage.
    const getFromLocalStg = localStorage.getItem('TimeData');
    const existinLocalData = getFromLocalStg ? JSON.parse(getFromLocalStg) : [];

    const seeStatusOfStar = data.map((item) => existinLocalData.some((checkStatus) => checkStatus.id === item.id));
    setStarStatus(seeStatusOfStar)

  }, [data])


  const handleSendData = (item, id) => {

    const getDataFromLocal = localStorage.getItem('TimeData');
    const existinLocalData = getDataFromLocal ? JSON.parse(getDataFromLocal) : [];

    //find The index of the repeated item if it's for localstorage again.
    const findSameDataIndex = existinLocalData.findIndex((perticularItem) => perticularItem.id === item.id);

    //type of toggle the item remove and add on star icon's click
    if (findSameDataIndex !== -1) {
      //if same id matches, it means condition is true & then this will filter out the object.
      const filterRepeatedItem = existinLocalData.filter((perticularItem) => perticularItem.id !== item.id);
      localStorage.setItem('TimeData', JSON.stringify(filterRepeatedItem))
    } else {
      // if id is not same then it'll add to the localStorage
      const setToLocalStorage = [...existinLocalData, item];
      localStorage.setItem('TimeData', JSON.stringify(setToLocalStorage))

    }

    //star icon check only
    console.log(starStatus[id], id);
    const checkStar = [...starStatus];
    checkStar[id] = !checkStar[id]
    setStarStatus(checkStar);
  }

  const handleFilterData = (filterText) => {
    const filteredData = data.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
    setFilteredData(filteredData)
  }

  const handleSortData = (sortValue) => {
    let sortData = [...filteredData];

    if (sortValue === 'A-Z') {
      sortData.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortValue === 'Z-A') {
      sortData.sort((a, b) => b.name.localeCompare(a.name))
    }

    setFilteredData(sortData)
  }

  const handleTimeSearch = (timeValue) => {
    const filteredByTime = data.filter((item) => item.time.toLowerCase().includes(timeValue.toLowerCase()))
    setFilteredData(filteredByTime)
  }

  const handleRefresh = () => {
    setFilteredData(data)
  }

  return (
    <>
      <FilterLine onSearch={handleFilterData} onSort={handleSortData} onTimeSearch={handleTimeSearch} onRefresh={handleRefresh} />
      <div className="practice">
        {filteredData.map((item, index) => {
          return (
            <>
              <div className="p-items" key={index}>
                <div className="s-icon" onClick={() => handleSendData(item, index)}>
                  {starStatus[index] ? <AiFillStar /> : <AiOutlineStar />}
                </div>
                <div className="time" style={{ paddingBottom: '5px', fontVariant: 'small-caps' }}>{item.name} </div>
                <div className="time">{item.time} </div>
                <div className="time">{item.date} </div>
                <div className="time">{item.availability} </div>
              </div>
            </>
          )
        })}
      </div>

    </>
  )
};

export default Practice;
