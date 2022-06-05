import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


/*
Key points:
1. to set different classes for article tag
-- inside the map function, allows us to add statement to do condition controll before return anything

2. useEffect() to do side features in one component function:
-- to determine if the index is valid or nor
-- to setInterval() and clearInterval() for auto play
-- the second parameters when using useEffect()
-- to use the cleanup function to avoid mess-up by the side effect function

3. auto play is counting on the setInterval() and clearInterval() methods
-- 
*/


function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  // const prevPerson = () => {
  //   setValue(value - 1 < 0 ? people.length - 1 : value - 1);
  // }

  // const nextPerson = () => {
  //   setValue(value + 1 > people.length - 1 ? 0 : value + 1);
  // }

  useEffect(() => {
    // to determine whether the value is valid or not
    const lastIndex = people.length - 1;

    if (value < 0) {
      setValue(lastIndex);
    }
    if (value > lastIndex) {
      setValue(0);
    }
  }, [value, people]);

  useEffect(() => {
    const autoPlay = setInterval(() => setValue(value + 1), 2000);

    return () => clearInterval(autoPlay);

  }, [value])

  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>

      <div className="section-center">

        {
          people.map((item, index) => {
            // inside map to add statement to do condition controll
            let position = 'nextSlide';
            if (index === value) {
              position = 'activeSlide';
            }
            if (index === value - 1 || ((value === 0) && index === people.length - 1)) {
              position = 'lastSlide';
            }

            return (
              <article key={item.id} className={position} >
                <img src={item.image} alt={item.name} className="person-img" />
                <h4>{item.name}</h4>
                <p className="title">{item.title}</p>
                <p className="text">{item.quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
              </article>
            );
          })
        }

        {/* <button className="prev" onClick={prevPerson}> <FiChevronLeft></FiChevronLeft> </button> */}
        <button className="prev" onClick={() => setValue(value - 1)}> <FiChevronLeft></FiChevronLeft> </button>

        {/* <button className="next" onClick={nextPerson}> <FiChevronRight></FiChevronRight> </button> */}
        <button className="next" onClick={() => setValue(value + 1)}> <FiChevronRight></FiChevronRight> </button>

      </div>
    </section>
  );
}

export default App;
