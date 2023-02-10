import classes from './Cart.module.css';
import Modal from '../UI/Modal8';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  const itemHaiKya = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, count: 1 });
  };

  const cartItem = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          count={item.count}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal viaBackDrop={props.bandHojaSimSIm}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {/* this hidecart prop came from app.js */}
        <button
          className={classes['button--alt']}
          onClick={props.bandHojaSimSIm}
        >
          Close
        </button>
        {itemHaiKya && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
