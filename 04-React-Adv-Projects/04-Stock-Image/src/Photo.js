import React from 'react'

const Photo = (item) => {
  return (<article className="photo">
    <img src={item.urls.regular} alt={item.alt_description}></img>
    <div className="photo-info">
      <div>
        <h4>{item.user.username}</h4>
        <p>{`${item.likes} likes`}</p>
      </div>
      <a href={`${item.user.portfolio_url}`} >
        <img src={item.user.profile_image.small} alt="portfolio_image" className="user-img"></img>
      </a>
    </div>
  </article >);
}

export default Photo
