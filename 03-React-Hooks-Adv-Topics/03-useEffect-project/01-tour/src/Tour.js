import React, { useState } from 'react';

const Tour = (props) => {
  const { id, image, info, name, price, removeTour } = props;
  // console.log(props);

  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {readMore ? `${info.substring(0, 200)}...` : info}
          <button onClick={() => { setReadMore(!readMore) }}>
            {
              !readMore ? 'show less' : 'show more'
            }
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
