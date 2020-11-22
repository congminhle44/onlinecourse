/** @format */

import React from 'react';

import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import * as action from '../../Redux/action';

const stripePromise = loadStripe(
  'pk_test_51HpPcYEskzrXofiTPk28ndSQ1ywELsbsanW4LaDZA7R5HF3Bv3h6ngBGpFcZsRS6oTtYL6tl6giNGIZyvNfmNbdp00vmlEnrZG'
);

const CheckoutForm = () => {
  const stripe = useStripe();

  const element = useElements();

  const dispatch = useDispatch();

  const pay = (id, amount) => dispatch(action.buyCourse(id, amount));

  const handleSubmit = (e) => {
    e.preventDefault();
    stripe
      .createPaymentMethod({
        type: 'card',
        card: element.getElement(CardElement),
      })
      .then((results) => {
        const { id } = results.paymentMethod;
        const amount = localStorage.getItem('totalPrice');
        pay(id, amount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className='container'>
      <CardElement />
      <button disabled={!stripe} onClick={handleSubmit}>
        Pay
      </button>
    </form>
  );
};

const Pay = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Pay;
