import Link from 'next/link'
import React from 'react'

export default function Aside() {
  return (
    <aside className="w-60 bg-yellow-100 p-4 h-800 rounded-xl text-black">
    <nav>
      <ul className='mt-4'>
        <li className=''>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li><li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
    
        {/* Más enlaces de navegación */}
      </ul>
    </nav>
  </aside>
  )
}
