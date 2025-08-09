import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchJSON } from '../services/dataService'

export default function Navigation() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchJSON('/data/navigation.json').then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <aside className="w-64 pt-4">
      <nav className="space-y-1">
        {items.map(i => (
          <NavLink key={i.id} to={i.path} className={({isActive}) => `block px-4 py-2 rounded ${isActive ? 'bg-sky-500 text-white' : 'hover:bg-gray-100'}`}>
            {i.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}