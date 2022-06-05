import React, { useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { FaBars } from 'react-icons/fa'


function App() {

  return (
    <>
      {/* <Home sidebarHandler={sidebarHandler} modalHandler={modalHandler}></Home> */}
      <Home ></Home>

      {/* <Modal showModal={showModal} modalHandler={modalHandler}></Modal> */}
      <Modal ></Modal>

      {/* <Sidebar showSidebar={showSidebar} sidebarHandler={sidebarHandler}></Sidebar> */}
      <Sidebar ></Sidebar>
    </>
  )
}

export default App
