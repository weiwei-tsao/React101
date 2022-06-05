import React, { useState, useEffect } from 'react'

// make sure to use https
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`


export const useFetch = (urlParam) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [data, setData] = useState(null);

    const fetchMovies = async (url) => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === 'True') {
                // data.Search => movies, data => single movie
                setData(data.Search || data);
            }
            else {
                setError({ show: true, msg: data.Error })
            }

            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParam}`)
    }, [urlParam])
    return { loading, error, data }
}
