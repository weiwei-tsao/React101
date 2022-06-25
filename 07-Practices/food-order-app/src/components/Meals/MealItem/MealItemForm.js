import React from 'react';

import classes from './MealItemForm.module.css';
import { Input } from '../../UI/Input';

export const MealItemForm = (props) => {
  const { id, onAddToCart } = props;

  const [isValidAmount, setIsValidAmount] = React.useState(true);

  const amountInputRef = React.useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmount(false);
      return;
    }

    setIsValidAmount(true);
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.button}>+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
