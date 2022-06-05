import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, image, job, text } = people[index];

  const randomIndex = () => {
    const idx = Math.floor(Math.random() * people.length);
    console.log(idx);
    return idx;
  }

  const prevPerson = () => {
    if (index - 1 < 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const nextPerson = () => {
    if (index + 1 > people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>

      <button className="random-btn" onClick={() => setIndex(randomIndex())}>suprise me</button>
    </article>
  );
};

export default Review;
