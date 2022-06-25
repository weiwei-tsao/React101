import React from 'react';
import { AvailableMeals } from './AvailableMeals';
import { MealsSummary } from './MealsSummary';

export const Meals = (props) => {
  return (
    <section>
      <MealsSummary />
      <AvailableMeals />
    </section>
  );
};
