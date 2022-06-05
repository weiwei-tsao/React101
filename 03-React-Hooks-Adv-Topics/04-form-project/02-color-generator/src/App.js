import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  // const [list, setList] = useState([]);
  const [list, setList] = useState(new Values('#0055aa').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const newColor = new Values(color).all(10);
      // console.log(newColor);
      setList(newColor);

    } catch (error) {
      // console.log(error);
      setError(true);

    }
  }


  return (
    <>
      <section className="container">

        <h3>color generator</h3>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className={error ? "error" : ""}
            id="color"
            name="color"
            placeholder="#0055aa"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <button type="submit" className="btn">generator</button>
        </form>
      </section>

      <section className="colors">
        {
          list.map((clr, idx) => {
            return (
              <SingleColor clr={clr} key={idx} idx={idx}></SingleColor>
            );
          })
        }
      </section>
    </>
  );
}

export default App
