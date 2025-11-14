import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Category({ title, items }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.id} className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={it.image} alt={it.name} className="w-full h-full object-cover"/>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{it.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{it.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Menu() {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/menu`)
        if (!res.ok) throw new Error('Failed to load menu')
        const data = await res.json()
        setMenu(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Menu</h1>
        <p className="text-gray-600 mt-3">Prices vary based on event size and requirements. Contact us for a personalised quote.</p>
      </div>

      {loading && <p className="text-center text-gray-600">Loading menu...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {menu.map((cat) => (
        <Category key={cat.key} title={cat.title} items={cat.items} />
      ))}

      <Footer />
    </div>
  )
}
