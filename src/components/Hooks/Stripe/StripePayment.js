import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../Hooks/Stripe/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import './styles/Common.css'
// import './styles/StripeStyle.css'

const stripePromise = loadStripe('pk_test_51L32KLCsQIHP5V5pO5zs1Mqu1tcstEOMngwtrtftvk3aUWXS91oilRcWhNEIK4vTTEZ6houmF4VijlGlGHI7FWEJ00jJLqyxcU');

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};

const StripePayment = () => {
    return (
        <div className="stripePaymentForm grid justify-center items-center align-center border-2 rounded-md shadow-md ">
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm />
            </Elements>

        </div>
    );
};

export default StripePayment;