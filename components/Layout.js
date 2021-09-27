import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
         {children}
      </div>
      <footer>Copyright {new Date().getFullYear()} L. Pirela </footer>
    </div>
  )
}
