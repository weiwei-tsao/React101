import React, { useState } from 'react';
import Review from './Review';


function App() {

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our review</h2>
          <div className="underline"></div>
        </div>
        <Review></Review>
      </section>
    </main>
  );
}

export default App;
