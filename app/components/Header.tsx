import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav className='flex justify-center h-15 bg-black  '>
        <ul className='flex space-x-5'>
            <Link href={"/"} >
            <li>
                Inicio
            </li>
            </Link>
            <Link href={"/peliculas"}>
            <li>
                Peliculas
            </li>
            </Link>
            <Link href={"/series"} >
            <li>
                Series
            </li>
            </Link>

            <Link href={"/anime"}>
            <li>
                Anime
            </li>
            </Link>
            <li>
               <input placeholder='Buscar' type="text" name="" id="" />
            </li>
        </ul>
    </nav>
  )
}
