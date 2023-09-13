import React, { useEffect } from 'react';
import { success, failure, increse, decrese, reset, increseByNumber } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const ReduxPrComp = () => {
  const apiState = useSelector((state) => state.api);
  const count = useSelector(state => state.count.count)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async (url) => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();

  //       dispatch(success(data));
  //     } catch (error) {
  //       dispatch(failure(error.message));
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     fetchData();
  //   };
  // }, [dispatch]);

  // return <>{apiState.loading ? <div>Loading...</div> : <div>Data..</div>}</>;
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increse())}>inc</button>
      <button onClick={() => dispatch(decrese())}>dec</button>
      <button onClick={() => dispatch(reset())}>res</button>
      <button onClick={() => dispatch(increseByNumber(10))}>bynum</button>

    </>
  )
};

export default ReduxPrComp;
