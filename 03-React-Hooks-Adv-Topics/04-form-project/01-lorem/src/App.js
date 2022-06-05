import React, { useState } from 'react';
import data from './data';


function App() {
  const [text, setText] = useState([]);
  const [amount, setAmount] = useState(0);

  const getRandomText = () => {
    return data[Math.floor(Math.random() * data.length)];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof amount); // this is a string
    let count = parseInt(amount);

    if (count >= 0) {

      const newText = [];

      while (count > 0) {
        newText.push(getRandomText());
        count -= 1;
      }

      setText(newText);
    }
  };


  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="textgraphs">textgraphs:</label>
        <input type="number" name="textgraphs" id="textgraphs" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className="btn" type="submit" >generate</button>
      </form>

      <article className="lorem-text">
        {
          text.map((item, idx) => {
            return (
              <p key={idx}>
                {item}
              </p>
            );
          })
        }
      </article>
    </section>
  );
}

export default App;
