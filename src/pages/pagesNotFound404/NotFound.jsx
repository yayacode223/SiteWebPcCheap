import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="conteneur">
        <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
        </h1>
        <h3>Page not found</h3>
        <Link className='link' to={'/'}>Retour à l'acceuil</Link>
  </div>
  )
}
