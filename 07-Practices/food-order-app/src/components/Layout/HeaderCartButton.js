import React, { Fragment } from 'react';
import { CartContext } from '../../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

export const HeaderCartButton = (props) => {
  const { setShowModal } = props;
  const { items } = React.useContext(CartContext);

  const numOfCartItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const [btnIsHighlighted, setBtnIsHightlighted] = React.useState(false);
  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }

    // 首先 放入购物车的时候 增加动效果
    setBtnIsHightlighted(true);

    // 为了 实现每次放入的时候都有效果，需要清除上次的
    const timer = setTimeout(() => {
      setBtnIsHightlighted(false);
    }, 300);

    // 这里涉及到 防抖（ **Debounce** ）和节流（ **throttle** ）
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <Fragment>
      <button
        className={btnClass}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className={classes.icon}>
          <CartIcon />
        </div>
        <span>Your Cart</span>
        <div className={classes.badge}>{numOfCartItems}</div>
      </button>
    </Fragment>
  );
};
