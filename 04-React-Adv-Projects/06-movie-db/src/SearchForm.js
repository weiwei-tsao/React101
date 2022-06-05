import React from 'react'
import { useGlobalContext } from './context'


const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const handleSubmit = (event) => {
    // to avoid refresh page when hitting enter key
    event.preventDefault();
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  return <form className="search-form" onSubmit={handleSubmit}>
    <h2>search movies</h2>
    <input type="text" className="form-input" value={query} onChange={handleChange}></input>
    {error.show && <div className="error">{error.msg}</div>}
  </form>
}

export default SearchForm
