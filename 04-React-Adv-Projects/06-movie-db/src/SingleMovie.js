import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { NO_POSTER_IMG } from './context'
import { useFetch } from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()
  const { loading, error, data: movie } = useFetch(`&i=${id}`)

  if (loading) {
    return <div className="loading"></div>
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to='/' className="btn">back to home</Link>
      </div>
    );
  }

  return <section className="single-movie">
    <img src={movie.Poster === 'N/A' ? NO_POSTER_IMG : movie.Poster} alt={movie.Title}></img>
    <div className="single-movie-info">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <h4>{movie.Year}</h4>
      <Link className="btn" to="/">back to movies</Link>
    </div>
    {error.show && <div className="error">{error.msg}</div>}
  </section>
}

export default SingleMovie
