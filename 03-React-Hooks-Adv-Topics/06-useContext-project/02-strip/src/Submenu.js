import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page } = useGlobalContext();

  // using useRef to attach the container which will be changed of the size or other styles
  const container = useRef(null);

  const [columns, setColumns] = useState('col-2');


  useEffect(() => {
    // using side effect to handle about data updates when pages or dependencies have changed
    setColumns('col-2');
    const { center, bottom } = location;

    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom}px`;

    if (page.links.length === 3) {
      setColumns('col-3');
    }
    if (page.links.length >= 4) {
      setColumns('col-4');
    }

  }, [location, page.links.length])

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page.page}</h4>
        <div className={`submenu-center ${columns}`}>
          {page.links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  );
}

export default Submenu
