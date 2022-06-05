import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'


const Hero = () => {
  // const { isSidebarOpen } = useGlobalContext();
  // console.log(useGlobalContext());
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>

      <div className="hero-center">

        <article className="hero-info">
          <h1>Payments infrastructure <br />  for the internet</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt velit consequuntur.</p>
          <button className="btn">start now</button>
        </article>

        <article className="hero-image">
          <img src={phoneImg} alt="hero image" />
        </article>
      </div>
    </section>
  );
}

export default Hero
