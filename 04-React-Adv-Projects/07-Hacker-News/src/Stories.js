import React from 'react'
import { REMOVE_STORY } from './actions';

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>
  }

  return <section className="stories">
    {
      hits.map((item) => {
        return <article className="story" key={item.objectID}>
          <h4 className="title">{item.title}</h4>
          <p className="info">
            {item.points} by {item.author} | {item.num_comments} comments
          </p>
          <div>
            <a className="read-link" href={item.url}>read more</a>
            <button className="remove-btn" onClick={() => removeStory(item.objectID)}>remove</button>
          </div>
        </article>
      })
    }
  </section>
}

export default Stories
