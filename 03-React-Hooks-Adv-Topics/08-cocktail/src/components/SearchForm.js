import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef(null);

  React.useEffect(() => {
    // when component loaded, to make the input (ref.current) to get focused
    searchValue.current.focus();
  }, [])

  const searchCocktail = () => {
    // get the input element(ref.current) value
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (event) => {
    // to prevent hitting enter to submit
    event.prevent.default();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input id="name" type="text" name="name" ref={searchValue} onChange={searchCocktail}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
