import React, { useMemo } from 'react';

const useOptions = () => {
 const options = useMemo(
  () => ({
   style: {
    base: {
     fontSize : '16px',
     color: "#424770",
     letterSpacing: "0.025em",
     fontFamily: "Source Code Pro, monospace",
     "::placeholder": {
      color: "#aab7c4"
     }
    },
    invalid: {
     color: "#9e2146"
    }
   }
  }),
 );

 return options;
};

export default useOptions;