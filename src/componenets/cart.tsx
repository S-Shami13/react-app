import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { addProductToCart, removeProductFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../store/slices/cartSlice';

const Cart: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.cart.products);
    
    const handleAddProduct = () => {
        const newProduct = { id: 1, name: 'Product 1', price: 100, quantity: 1 };
        dispatch(addProductToCart(newProduct));
    };

  const handleRemoveProduct = (id: number) => {
    dispatch(removeProductFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
      <h2>Products in Cart</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
            <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
