import React from "react";
import Review from "./Review";
import reviews from "./data";

function App() {
  const [index, setIndex] = React.useState(0);

  const nextIndex = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevIndex = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const randomIndex = () => {
    const newIndex = Math.floor(Math.random() * reviews.length);
    setIndex(newIndex);
  };
  const abc = "abc";

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* <Review /> */}
        <Review
          review={reviews[index]}
          nextIndex={nextIndex}
          prevIndex={prevIndex}
          randomIndex={randomIndex}
        />
      </section>
    </main>
  );
}

export default App;
