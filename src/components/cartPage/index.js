import React from 'react';
import './cart.css'
import { useContextData } from '../../context';

const Cart = () => {
  const { cartData, setCartData } = useContextData();

  const handleCancelClick = (index) => {
    const updatedCart = cartData.filter((item, i) => i !== index);
    setCartData(updatedCart);
  };

  return (
    <>
      <div className='main-wrapper'>
        {cartData.length > 0 ? (

          <div className="cart-table">
            <p>Cart</p>
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
                {cartData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.availability}</td>
                    <td>
                      <button onClick={() => handleCancelClick(index)}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </>
  );
};

export default Cart;
