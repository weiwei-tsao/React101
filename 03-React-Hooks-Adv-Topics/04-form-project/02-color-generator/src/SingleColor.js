import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'


const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);

  const { hex, type, weight, idx } = props.clr;

  // console.log(hex, type, weight);

  const bkColor = {
    backgroundColor: `#${hex}`
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearInterval(timeout);
    }
  }, [alert])

  return (
    <article
      className={type === "tint" ? "color false" : "color color-light"}
      key={idx}
      style={bkColor}
      onClick={() => {
        setAlert(true);
        // copy to clipboard
        navigator.clipboard.writeText(`#${hex}`);
      }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {
        alert && <p className="alert">copied to clipboard</p>
      }
    </article>
  );
}

export default SingleColor
