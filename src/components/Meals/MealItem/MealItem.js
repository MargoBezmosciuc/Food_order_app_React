import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)} €`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      img:props.img,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h1>{props.name}</h1>
        <img src={props.img} alt={props.name} />
        <div>  

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
        </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;