import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [moives, setMoives] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // function fetchMoivesHandler() {
  // fetch('https://swapi.dev/api/films/')
  //   .then((resp) => {
  //     return resp.json();
  //   })
  //   .then((data) => {
  //     const transformedMoives = data.results.map((moive) => {
  //       return {
  //         id: moive.episode_id,
  //         title: moive.title,
  //         openingText: moive.opening_crawl,
  //         releaseDate: moive.release_date,
  //       };
  //     });
  //     setMoives(transformedMoives);
  //   });

  // }
  const fetchMoivesHandler = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const resp = await fetch('https://swapi.dev/api/films/');
      if (!resp.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await resp.json();

      const transformedMoives = data.results.map((moive) => {
        return {
          id: moive.episode_id,
          title: moive.title,
          openingText: moive.opening_crawl,
          releaseDate: moive.release_date,
        };
      });
      setMoives(transformedMoives);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    fetchMoivesHandler();
  }, [fetchMoivesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={() => fetchMoivesHandler()}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && moives.length === 0 && !error && <p>Found No Moives</p>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && moives.length > 0 && <MoviesList movies={moives} />}
      </section>
    </React.Fragment>
  );
}

export default App;
