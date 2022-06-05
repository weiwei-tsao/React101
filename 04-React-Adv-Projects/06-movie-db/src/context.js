import React, { useState, useContext } from 'react'
import { useFetch } from './useFetch';

export const NO_POSTER_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [query, setQuery] = useState('matrix');
  const { loading, error, data: movies } = useFetch(`&s=${query}`);

  return <AppContext.Provider value={{ loading, error, movies, query, setQuery }} >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
