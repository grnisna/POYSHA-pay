import React from 'react';
import swal from 'sweetalert';

const SweetSuccessTost = () => {
 return (
  <div>
   {swal("Good job!", "You clicked the button!", "success")}
  </div>
 );
};

export default SweetSuccessTost;