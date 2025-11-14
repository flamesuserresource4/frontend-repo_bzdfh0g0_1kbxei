import { Instagram, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white font-black">C</div>
              <p className="text-xl font-bold text-white">Choppinzskys</p>
            </div>
            <p className="text-sm text-gray-400">The Finest Finger Food, Across the UK. Freshly made to order, delivered beautifully for weddings, corporate events and private celebrations.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="/">Home</a></li>
              <li><a className="hover:text-white" href="/menu">Menu</a></li>
              <li><a className="hover:text-white" href="/gallery">Gallery</a></li>
              <li><a className="hover:text-white" href="/services">Services</a></li>
              <li><a className="hover:text-white" href="/about">About</a></li>
              <li><a className="hover:text-white" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16}/> hello@choppinzskys.co.uk</li>
              <li className="flex items-center gap-2"><Phone size={16}/> +44 0000 000000</li>
              <li>Serving the entire United Kingdom</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10"><Instagram size={18}/></a>
              <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10"><Facebook size={18}/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-gray-400 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Choppinzskys. All rights reserved.</p>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
