import React, { Fragment } from 'react';

import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = (props) => {
  const { setShowModal } = props;
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton setShowModal={setShowModal} />
      </header>

      <div className={classes['main-image']}>
        <img alt="meals" src={mealsImg}></img>
      </div>
    </Fragment>
  );
};
