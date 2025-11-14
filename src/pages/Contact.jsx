import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    payload.guests = payload.guests ? Number(payload.guests) : null

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Could not submit inquiry')
      setStatus('Thank you! We will be in touch shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again or call us.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <section className="max-w-5xl mx-auto px-4 py-14">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">Contact & Quote</h1>
        <p className="text-center text-gray-600 mt-3">For urgent enquiries, call us directly on +44 0000 000000</p>

        <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-6 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Event Date</label>
              <input name="event_date" type="date" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Event Type</label>
              <input name="event_type" placeholder="Wedding, Corporate, Birthday..." className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Estimated Guest Count</label>
              <input name="guests" type="number" min="1" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea name="message" rows="5" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"></textarea>
            </div>
            <div>
              <button disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold">
                {loading ? 'Sending...' : 'Get a Free Quote'}
              </button>
            </div>
            {status && <p className="text-sm text-center text-emerald-700">{status}</p>}
          </div>
        </form>
      </section>

      <Footer />
    </div>
  )
}
