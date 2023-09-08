import React, { useState, useEffect } from 'react';
import './style.css';
import { tableData } from '../../actions/tableData';
import { useContextData } from '../../context';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../routes/RoutePaths';
import { BsCartCheck } from 'react-icons/bs';

const MainComponent = () => {
  const [data, setData] = useState(tableData);
  const [countdown, setCountdown] = useState(60);
  const [freeSeats, setFreeSeats] = useState(Math.floor(Math.random() * 16));
  const { cartData, setCartData } = useContextData();

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const handleBookNow = (item) => {
    const isItemInCart = cartData.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      alert('Item is already in cart');
    } else {
      setCartData([...cartData, item]);
    }
  };

  return (
    <>
      <div className='main-wrapper'>
        <div className='table-container'>
          <div className='cart-icon'>
            <Link to={AppRoute.CART}>
              <BsCartCheck color='#000' fontSize={42} />
              <span className='badge'>{cartData.length}</span>
            </Link>
          </div>
          <div className='random-time'>Time left: {countdown} seconds</div>
          <div className='bold-heading'>Claim Your Free Trial Class</div>
          <div className='table-top'>
            <div className='lsd'>Class Schedule</div>
            <div className='rsd'>
              Free seats left: <span>{freeSeats}</span>
            </div>
          </div>
          <table className='custom-table'>
            <thead>
              <tr>
                <th>Time</th>
                <th>Date</th>
                <th>Availability</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const availability = item.availability.split(' ')[0];
                const isFull = availability === '0';
                return (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.availability}</td>
                    <td>
                      {isFull ? (
                        <button className='active'>Full</button>
                      ) : (
                        <button onClick={() => handleBookNow(item)}>
                          Book Now
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
