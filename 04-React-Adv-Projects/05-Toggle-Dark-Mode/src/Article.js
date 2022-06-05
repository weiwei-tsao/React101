import React from 'react'
import moment from 'moment'
const Article = (props) => {
  return <article className="post">
    <h2>{props.title}</h2>
    <div className="post-info">
      <span>{moment(props.date).format("MMMM Do, YYYY")}</span>
      <span>{props.length} min read</span>
    </div>
    <p>{props.snippet}</p>
  </article>
}

export default Article
