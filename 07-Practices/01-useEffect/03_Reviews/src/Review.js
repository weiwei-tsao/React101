import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = (props) => {
  // const [index, setIndex] = React.useState(0);
  // const { id, name, image, job, text } = reviews[index];

  // const nextIndex = () => {
  //   if (index === reviews.length - 1) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // };

  // const prevIndex = () => {
  //   if (index === 0) {
  //     setIndex(reviews.length - 1);
  //   } else {
  //     setIndex(index - 1);
  //   }
  // };

  // const randomIndex = () => {
  //   const newIndex = Math.floor(Math.random() * reviews.length);
  //   setIndex(newIndex);
  // };
  const { id, name, image, job, text } = props.review;

  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={props.prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={props.nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={props.randomIndex}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
