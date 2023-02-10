import classes from './RenderVegList.module.css';
import RenderVegListForm from './RenderVegListForm6';

import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const RenderVegList = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (count) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      count: count,
      price: props.price,
    });
  };

  const price = `₹${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <img src={props.img} alt='' srcset='' />
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <RenderVegListForm
          id={props.id}
          passingCountForAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default RenderVegList;
