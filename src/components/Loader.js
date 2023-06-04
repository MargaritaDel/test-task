import React from 'react';

import { Circles } from 'react-loader-spinner';


const Loader = () => {
  return (
   
      <Circles
        height="150"
        width="150"
        color="orange"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
   
  );
};

export default Loader;