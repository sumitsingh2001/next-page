export const success = (data) => {
  return {
    type: 'SUCCESS',
    payload: data,
  };
};

export const failure = (error) => {
  return {
    type: ' ERROR',
    payload: error,
  };
};

export const increse = () => {
  return {
    type: 'INC',
  };
};
export const decrese = () => {
  return {
    type: 'DEC',
  };
};
export const reset = () => {
  return {
    type: 'RESET',
  };
};
export const increseByNumber = (count) => {
  return {
    type: 'INCBYNUM',
    payload: count,
  };
};
