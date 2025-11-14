import { Link, NavLink } from 'react-router-dom'
import { Instagram, Facebook, Phone, Mail } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-emerald-600' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white font-black shadow-lg ring-2 ring-amber-200 group-hover:scale-105 transition-transform">C</div>
            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight text-gray-900">Choppinzskys</p>
              <p className="text-[11px] text-gray-500 -mt-1">Elevating Your Events</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${navLinkClass({isActive})} md:ml-3 bg-emerald-600 text-white hover:bg-emerald-700`}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:hello@choppinzskys.co.uk" className="text-gray-600 hover:text-emerald-700"><Mail size={18} /></a>
            <a href="tel:+440000000000" className="text-gray-600 hover:text-emerald-700"><Phone size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-emerald-700"><Instagram size={18} /></a>
            <a href="#" className="text-gray-600 hover:text-emerald-700"><Facebook size={18} /></a>
          </div>

          <div className="md:hidden">
            <a href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow">
              <Phone size={16} /> Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
