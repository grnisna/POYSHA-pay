import React from 'react';
import SubmitPayment from './SubmitPayment';
import {
 PayPalScriptProvider,
 PayPalButtons,
 usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const amount = "2";
const currency = "USD";
const style = { "layout": "vertical" };

const Paypal = () => {
 return (
  <div className="flex justify-center p-20">
   <div style={{ maxWidth: "1550px", minHeight: "200px" }} className="flex p-20 justify-center items-center bg-info">
    <PayPalScriptProvider
     options={{
      "client-id": "AfOBjAw9DzA5zEuuRFfj3OoVZ3LPCPk5oXFXwM8ZwcmvtsRkbvoMCwmpeSTam3Gu4Fd7-4HJzKgVUBL3",
      components: "buttons",
      currency: "USD"
     }}
    >
     <SubmitPayment
      SubmitPayment
      currency={currency}
      showSpinner={false}
     />
    </PayPalScriptProvider>
   </div>
  </div>
 );
};

export default Paypal;