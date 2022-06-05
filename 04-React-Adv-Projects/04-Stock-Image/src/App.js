import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

// access the env vars => process.env.ENV_VARS
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const mounted = useRef(false);
  const [newImages, setNewImages] = useState(false);

  const fetchImages = async () => {
    let urlPage = `&page=${page}`;
    let urlQuery = `&query=${query}`;
    let requestUrl = query ? `${searchUrl}${clientID}${urlPage}` + urlQuery : `${mainUrl}${clientID}${urlPage}`;

    setLoading(true);

    try {
      const response = await fetch(requestUrl);
      const data = await response.json();

      // keep the previous photos and add new requested photos
      // setPhotos(oldPhotos => [...oldPhotos, ...data]);
      setPhotos(oldPhotos => {
        if (query) {
          if (page === 1) {
            return data.results;
          }
          else {
            return [...oldPhotos, ...data.results];
          }
        }
        else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
      setNewImages(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      setNewImages(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page])

  // useEffect(() => {
  //   const event = window.addEventListener('scroll', () => {
  //     // console.log('visible window height: ', window.innerHeight)
  //     // console.log('vertical scroll offset: ', window.scrollY)
  //     // console.log('total height: ', document.body.scrollHeight)
  //     if (!loading && (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2)) {
  //       console.log('request new images...')
  //       setPage(oldPage => oldPage + 1);
  //     }
  //   });

  //   return () => window.removeEventListener('scroll', event)
  //   // eslint-disable-next-line
  // }, [])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newImages])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // clean up
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  }

  return (<main>
    <section className="search">
      <form className="search-form" >
        <input className="form-input" type="text" placeholder="search" value={query} onChange={handleChange}></input>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          <FaSearch></FaSearch>
        </button>
      </form>
    </section>

    <section className="photos">
      <div className="photos-center">
        {
          photos.map((item, index) => {
            return <Photo key={index} {...item} />
          })
        }
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
    </section>
  </main>);
}

export default App
