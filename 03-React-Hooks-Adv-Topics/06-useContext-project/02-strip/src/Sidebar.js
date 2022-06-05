import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    // 3 operators for showing different class styles
    <div className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`} >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>

        <div className="sidebar-links">
          {
            sublinks.map((sublink) => {
              const { page, links } = sublink;

              return (
                <article key={page}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {
                      links.map((link) => {
                        const { label, icon, url } = link;

                        return (
                          <a key={label} href={url}>{icon}{label}</a>
                        );
                      })
                    }
                  </div>
                </article>
              );
            })
          }
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
