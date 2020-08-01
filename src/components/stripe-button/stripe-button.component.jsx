import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HBPY0IiLyfhFUA1gDri1KtqhxFeZduCc0NUcvIXFE7AZPc1Ka8PrYinoK1YO8HPa1Xti5cLvR2PkeeTxS5xu7cv00YKvmK4wb';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="JOI"
            billingAddress
            shippingAddress
            image='images/joi-logo.png'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />


    )

}

export default StripeCheckoutButton;