import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {

  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // check loading, initially the data is empty
    if (loading) return;

    setFollowers(data[page]);
    // dependencies
  }, [loading, page]);

  const prevClick = () => {
    let newPage = page - 1;
    if (newPage < 0) {
      newPage = data.length - 1;
    }
    setPage(newPage);
  }

  const nextClick = () => {
    let newPage = page + 1;
    if (newPage > data.length - 1) {
      newPage = 0;
    }
    setPage(newPage);
  }

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {
            followers.map((item) => {
              return <Follower key={item.id} {...item} />
            })
          }
        </div>
        {
          loading ? null : (
            <div className="btn-container">
              <button className="prev-btn" type="button" onClick={prevClick}>prev</button>
              {
                data.map((_, index) => {
                  return (<button key={index} className={`page-btn ${index === page ? "active-btn" : ""}`} onClick={() => handlePage(index)}>{index + 1}</button>);
                })
              }
              <button className="next-btn" type="button" onClick={nextClick}>next</button>
            </div>
          )
        }
      </section>
    </main>
  );
}

export default App
