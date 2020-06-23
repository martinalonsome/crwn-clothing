import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxIdQHDAqN4Sj7M2fTMna8eOsnsIn2GzPoqUGc9wyX5mLu86WHXWEOc4mDjrlcbfBsMYeLXcCxzmJ8R3n5TTTbA00SgFvaSzC'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Unikist"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            abount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;