import React, { useState } from 'react';
import Footer from './Footer'; // Import the Footer component
import '../styles/MenuPage.css';
import { useNavigate } from 'react-router-dom'; // For navigation

const menuItems = [
    { name: "Margherita Pizza", price: 100, description: "Classic pizza with tomato sauce and cheese.", image: "/pizza.jpg" },
    { name: "Cheeseburger", price: 120, description: "Juicy burger with cheddar cheese and toppings.", image: "/burger.jpg" },
    { name: "Penne Arrabbiata", price: 90, description: "Pasta with spicy tomato sauce and herbs.", image: "/pasta.jpg" },
    { name: "Sushi Platter", price: 180, description: "Assorted sushi rolls with fresh ingredients.", image: "/sushi.jpg" },
    { name: "Caesar Salad", price: 70, description: "Crispy lettuce with Caesar dressing and croutons.", image: "/salad.jpg" },
    { name: "Grilled Chicken", price: 140, description: "Tender grilled chicken with seasonal veggies.", image: "/grilled-chicken.jpg" },
    { name: "Veggie Wrap", price: 80, description: "Healthy wrap with fresh vegetables and hummus.", image: "/veggie-wrap.jpg" },
    { name: "Chocolate Cake", price: 60, description: "Rich chocolate cake with creamy frosting.", image: "/chocolate-cake.jpg" },
    { name: "Fruit Smoothie", price: 50, description: "Refreshing smoothie with seasonal fruits.", image: "/smoothie.jpg" },
    { name: "French Fries", price: 40, description: "Golden crispy fries with ketchup.", image: "/fries.jpg" },
    { name: "Tandoori Chicken", price: 150, description: "Spiced and roasted chicken with a smoky flavor.", image: "/tandoori-chicken.jpg" },
    { name: "Fish and Chips", price: 130, description: "Crispy battered fish with golden fries.", image: "/fish-chips.jpg" },
    { name: "Greek Salad", price: 80, description: "Fresh salad with feta cheese, olives, and veggies.", image: "/greek-salad.jpg" },
    { name: "Veggie Pizza", price: 110, description: "Loaded with fresh vegetables and mozzarella cheese.", image: "/veggie-pizza.jpg" },
    { name: "Spaghetti Bolognese", price: 120, description: "Traditional spaghetti with a rich meat sauce.", image: "/spaghetti-bolognese.jpg" },
    { name: "Paneer Tikka", price: 100, description: "Marinated and grilled cottage cheese cubes.", image: "/paneer-tikka.jpg" },
    { name: "Chicken Tikka Masala", price: 160, description: "Classic Indian curry with creamy tomato gravy.", image: "/chicken-tikka-masala.jpg" },
    { name: "Lamb Chops", price: 200, description: "Grilled lamb chops seasoned with herbs.", image: "/lamb-chops.jpg" },
    { name: "Vegetable Spring Rolls", price: 60, description: "Crispy rolls filled with fresh vegetables.", image: "/spring-rolls.jpg" },
    { name: "Mango Lassi", price: 40, description: "Sweet yogurt-based mango drink.", image: "/mango-lassi.jpg" },
    { name: "Garlic Bread", price: 50, description: "Toasted bread with garlic and butter.", image: "/garlic-bread.jpg" },
    { name: "Chicken Caesar Wrap", price: 90, description: "Caesar salad wrapped in soft flatbread.", image: "/chicken-caesar-wrap.jpg" },
    { name: "Falafel Bowl", price: 110, description: "Healthy bowl with falafel, hummus, and fresh veggies.", image: "/falafel-bowl.jpg" },
    { name: "Churros", price: 50, description: "Fried dough pastry with cinnamon sugar.", image: "/churros.jpg" },
    { name: "Tacos", price: 80, description: "Delicious tacos with fresh toppings.", image: "/tacos.jpg" },
    { name: "Sandwich", price: 60, description: "Classic sandwich with layers of fresh ingredients.", image: "/sandwich.jpg" },
    { name: "Steak", price: 200, description: "Grilled steak cooked to perfection.", image: "/steak.jpg" },
    { name: "Ramen", price: 120, description: "Warm and hearty ramen bowl with toppings.", image: "/ramen.jpg" },
    { name: "Ice Cream", price: 50, description: "Refreshing and creamy ice cream.", image: "/icecream.jpg" },
    { name: "Milkshake", price: 70, description: "Creamy milkshake in various flavors.", image: "/milkshake.jpg" }
];

function MenuPage() {
    const navigate = useNavigate(); // Hook for navigation
    const [cart, setCart] = useState({}); // State to manage cart items and quantities

    const handleQuantityChange = (itemName, quantity) => {
        setCart((prevCart) => ({
            ...prevCart,
            [itemName]: {
                ...prevCart[itemName],
                quantity: Number(quantity) || 0,
                price: menuItems.find((item) => item.name === itemName)?.price || 0,
            },
        }));
    };

    const handleAddToCart = () => {
        // Filter out items with quantity 0 or less
        const filteredCart = Object.entries(cart)
            .filter(([, details]) => details.quantity > 0)
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

        navigate('/cart', { state: { cart: filteredCart } });
    };

    return (
        <main className="menu-page">
            <h2 className="menu-title">Explore Our Delicious Menu</h2>

            {/* Add button below the tagline */}
            <div className="top-cart-button-container">
                <button
                    className="add-to-cart-button"
                    onClick={handleAddToCart}
                    disabled={!Object.values(cart).some((item) => item?.quantity > 0)}
                >
                    Add Selected Items to Cart
                </button>
            </div>

            {/* Menu items section */}
            <section className="menu-items">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.image} alt={item.name} className="menu-item-image" />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className="quantity-wrapper">
                            <label htmlFor={`quantity-${index}`}>Quantity:</label>
                            <input
                                id={`quantity-${index}`}
                                type="number"
                                min="0"
                                placeholder="0"
                                value={cart[item.name]?.quantity || ''}
                                onChange={(e) => handleQuantityChange(item.name, e.target.value)}
                                className="quantity-input"
                            />
                        </div>
                        <p className="item-price">Price: Rs{item.price}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default MenuPage;
