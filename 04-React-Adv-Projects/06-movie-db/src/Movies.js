import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
// import SingleMovie from './SingleMovie'
import { NO_POSTER_IMG } from './context'


const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>
  }

  // console.log(movies)

  return <section className="movies">
    {
      movies.map((movie, index) => {
        return <Link to={`/movies/${movie.imdbID}`} className="movie" key={index}>
          <article>
            <img src={movie.Poster === 'N/A' ? NO_POSTER_IMG : movie.Poster} alt={movie.Title}></img>
            <div className="movie-info">
              <h4 className="title">{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </article>
        </Link>
      })
    }
  </section>
}

export default Movies
