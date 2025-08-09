import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchJSON } from '../services/dataService'
import Card from './Card'
import Table from './Table'
import Chart from './Chart'
import Loader from './Loader'

export default function DynamicComponentLoader() {
  const [components, setComponents] = useState(null)
  const [error, setError] = useState(null)
  const location = useLocation()

  useEffect(() => {
    let cancelled = false
    async function load() {
      setComponents(null)
      setError(null)
      try {
        const nav = await fetchJSON('/data/navigation.json')
        // find exact path match (navigation.json paths are like "/", "/books")
        const current = nav.find(item => item.path === location.pathname)
        if (!current) {
          setComponents([])
          return
        }
        const loaded = await Promise.all(
          current.components.map(async comp => {
            const data = await fetchJSON(comp.dataUrl)
            return { ...comp, data }
          })
        )
        if (!cancelled) setComponents(loaded)
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed')
      }
    }
    load()
    return () => { cancelled = true }
  }, [location.pathname])

  if (error) return <div className="text-red-500">{error}</div>
  if (!components) return <Loader />
  if (components.length === 0) return <div>No components configured for this path.</div>

  return (
    <div className="grid grid-cols-1 gap-4">
      {components.map((c, idx) => {
        switch (c.type) {
          case 'Card': return <Card key={idx} {...c.data} />
          case 'Table': return <Table key={idx} {...c.data} />
          case 'Chart': return <Chart key={idx} chartData={c.data} />
          default: return null
        }
      })}
    </div>
  )
}