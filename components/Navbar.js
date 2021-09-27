import {Link} from 'gatsby'
import React from 'react'

export default function navbar() {
  return (
    <nav>
      <h1>L. Pirela</h1>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="about">About Me</Link>
      <Link to="projects">Projects</Link>
      </div>
    </nav>
  )
}
