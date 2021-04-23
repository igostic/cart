import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 100000,
            title: 'Samsung Galaxy S21',
            qty: 0,
            img: ''
        }
    }
    increaseQuantity = () => {
        this.setState((prevState) => {
            return {
            qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        const { qty } = this.state;

        if (qty === 0) {
            return;
        }
        this.setState((prevState) =>{
            return {
            qty: this.state.qty - 1
        }
    });
    }
    render() {
        const { price, title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img 
                    src = 'https://images-na.ssl-images-amazon.com/images/I/917nPCOw9-L._SL1500_.jpg' 
                    style = {styles.image} 
                    alt="s21"/>
                </div>

                <div className="right-block">
                   <div style = { { fontSize: 25 } }> { title }</div>
                   <div style = { { color: '#777' } }> Rs { price }</div>
                   <div style = { { color: '#777' } }> Qty: { qty }</div>
                   <div className="cart-item-actions">
                    {/* {Buttons} */}
                       <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://pics.freeicons.io/uploads/icons/png/1883120851571183081-512.png"
                        onClick={ this.increaseQuantity.bind(this)}
                        />

                       <img 
                        alt="decrease"
                        className="action-icons"
                        src="https://pics.freeicons.io/uploads/icons/png/18537612601543238905-512.png"
                        onClick={ this.decreaseQuantity.bind(this)}
                        />

                       <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://pics.freeicons.io/uploads/icons/png/2790131631558965374-512.png"
                        />
                   </div>
                </div>
            </div>
        );   
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background : '#777'
    }
}

export default CartItem;