import React from 'react';

import classes from './MealsSummary.module.css';

export const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        You don't have to drop major dough to make something delicious for
        dinner—save money by choosing cheaper proteins like chicken, ground
        beef, and tilapia, or go vegetarian with bean-based meals.
      </p>
      <p>
        Whatever your style, these delish meals will please your entire fam
        without breaking the bank. Need more easy eats? Try these easy weeknight
        dinners and slow-cooker chicken dinners.
      </p>
    </section>
  );
};
