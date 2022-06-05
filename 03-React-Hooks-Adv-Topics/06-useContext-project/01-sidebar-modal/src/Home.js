import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Home = () => {
  const { sidebarHandler, modalHandler } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={sidebarHandler}><FaBars /></button>
      <button className="btn" onClick={modalHandler}>show modal</button>
    </main>
  )
}

export default Home
