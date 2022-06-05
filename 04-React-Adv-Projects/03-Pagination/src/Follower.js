import React from 'react'

const Follower = (item) => {
  return (
    <article className="card">
      <img src={item.avatar_url} alt={item.login}></img>
      <h4>{item.login}</h4>
      <a href={item.html_url} className="btn">
        view profile
      </a>
    </article>
  );
}

export default Follower
