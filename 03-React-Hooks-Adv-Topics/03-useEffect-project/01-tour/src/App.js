import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Error from './Error'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const getData = async () => {
    setLoading(true);

    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setLoading(false);
      setTours(data);

    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <Error></Error>
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => { getData() }}>Refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App
