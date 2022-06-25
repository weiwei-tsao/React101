import React from 'react';
import { CartContext } from '../../../store/CartContext';

import classes from './MealItem.module.css';
import { MealItemForm } from './MealItemForm';

export const MealItem = (props) => {
  const { id, name, description, price } = props;

  const { addItem } = React.useContext(CartContext);
  const onAddToCart = (amount) => {
    addItem({
      id: id,
      name: name,
      description: description,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{`$${price.toFixed(2)}`}</span>
      </div>

      <div>
        <MealItemForm id={id} onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};
