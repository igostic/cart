import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    render () {
        return (
            <div>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
        );
    }
}

export default Cart;