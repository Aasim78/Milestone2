import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Import Footer component
import '../styles/CartPage.css';

function CartPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [cart, setCart] = useState({});

    // Calculate the total sum of all items in the cart
    const calculateTotal = () => {
        return Object.values(cart).reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    };

    useEffect(() => {
        const cartData = location.state?.cart || JSON.parse(localStorage.getItem('cart')) || {};
        setCart(cartData);
    }, [location.state]);

    const handleQuantityChange = (itemName, quantity) => {
        setCart((prevCart) => {
            const updatedCart = {
                ...prevCart,
                [itemName]: { ...prevCart[itemName], quantity: Number(quantity) || 0 },
            };
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handleRemoveItem = (itemName) => {
        setCart((prevCart) => {
            const { [itemName]: _, ...updatedCart } = prevCart;
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handlePlaceOrder = () => {
        alert('Order placed successfully!');
        setCart({});
        localStorage.removeItem('cart');
        navigate('/');
    };

    return (
        <div className="cart-page-container">
            <main className="cart-page">
                <h2>Your Shopping Cart</h2>
                {Object.keys(cart).length > 0 ? (
                    <section className="cart-items">
                        {Object.entries(cart).map(([itemName, itemDetails], index) => (
                            <div key={index} className="cart-item">
                                <h3>{itemName}</h3>
                                <p>Price per item: Rs {itemDetails.price.toFixed(2)}</p>
                                <label>
                                    Quantity:
                                    <input
                                        type="number"
                                        min="1"
                                        value={itemDetails.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(itemName, e.target.value)
                                        }
                                    />
                                </label>
                                <p>Total: Rs {(itemDetails.quantity * itemDetails.price).toFixed(2)}</p>
                                <button onClick={() => handleRemoveItem(itemName)}>Remove</button>
                            </div>
                        ))}
                        <h3 className="cart-total">Grand Total: Rs {calculateTotal().toFixed(2)}</h3>
                        <button className="place-order-button" onClick={handlePlaceOrder}>
                            Place Order
                        </button>
                    </section>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </main>
            <Footer /> {/* Footer component added here */}
        </div>
    );
}

export default CartPage;
