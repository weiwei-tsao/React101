import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem(theme)) {
    theme = localStorage.getItem(theme);
  }

  return theme;
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    // console.log(document.documentElement)
    // add class for entire html document
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    }
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
  };

  return <main>
    <nav>
      <div className="nav-center">
        <h1>Overreacted</h1>
        <button className="btn" onClick={toggleTheme}>Toggle</button>
      </div>
    </nav>

    <section className="articles">
      {
        data.map((article, index) => {
          return <Article key={index} {...article} />
        })
      }
    </section>
  </main>
}

export default App
