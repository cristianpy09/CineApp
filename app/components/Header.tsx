import React from 'react'

export default function Header() {
  return (
    <nav className='flex justify-center h-15 bg-black  '>
        <ul className='flex space-x-5'>
            <li>
                Inicio
            </li>
            <li>
                Peliculas
            </li>
            <li>
                Series
            </li>
            <li>
                Anime
            </li>
            <li>
               <input placeholder='Buscar' type="text" name="" id="" />
            </li>
        </ul>
    </nav>
  )
}
