import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJSON } from "../services/dataService";

export default function Navigation({ onItemClick }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchJSON("/data/navigation.json")
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <aside className="w-64 bg-white lg:bg-transparent shadow-lg lg:shadow-none h-full lg:h-auto pt-4 overflow-y-auto">
      <nav className="space-y-1 px-4">
        {items.map((i) => (
          <NavLink
            key={i.id}
            to={i.path}
            onClick={onItemClick}
            className={({ isActive }) => `
              block px-4 py-3 rounded-lg transition-colors duration-200 font-medium
              ${
                isActive
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-sky-600"
              }
            `}
          >
            {i.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
