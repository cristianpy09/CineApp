import Link from 'next/link'
import React from 'react'

export default function Aside() {
  return (
    <aside className="w-48 bg-gray-100 p-4 h-full">
    <nav>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
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
