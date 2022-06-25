import React from 'react';

import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';
import { CartContext } from '../../store/CartContext';
import { CartItem } from './CartItem';

const CartItems = (props) => {
  const { addItem, removeItem } = React.useContext(CartContext);

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  return (
    <ul className={classes['cart-items']}>
      {props.items.map((item, index) => {
        return (
          <CartItem
            key={`${index}-${item.id}`}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          >
            {item.name}
          </CartItem>
        );
      })}
    </ul>
  );
};

export const Cart = (props) => {
  const { showModal, setShowModal } = props;
  const { items, totalAmount } = React.useContext(CartContext);

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <CartItems items={items} />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Close
        </button>
        {items.length > 0 && (
          <button className={classes['button']}>Order</button>
        )}
      </div>
      <div></div>
    </Modal>
  );
};
