import React from 'react';
import Tour from './Tour';
const Tours = (props) => {

  const { tours } = props;
  // console.log(tours);

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {
          tours.map((tour) => {
            return (
              <Tour key={tour.id} {...tour} removeTour={props.removeTour}></Tour>
            )
          })
        }
      </div>
    </section>
  );
};

export default Tours;
