import React from 'react';

import { Card } from '../UI/Card';
import { DUMMY_MEALS } from './dummyMealsData';
import classes from './AvailableMeals.module.css';
import { MealItem } from './MealItem/MealItem';

export const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal, index) => {
    return <MealItem key={meal.id} {...meal} />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
