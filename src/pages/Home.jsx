import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const features = [
  { title: 'Nationwide Coverage', icon: CheckCircle },
  { title: 'Freshly Made to Order', icon: CheckCircle },
  { title: 'Diverse Menu', icon: CheckCircle },
]

const showcase = [
  { name: 'Puff Puff', img: 'https://images.unsplash.com/photo-1617191518205-29c76d7d6672?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Samosa', img: 'https://images.unsplash.com/photo-1683021712492-27cf3ad5f222?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Spring Rolls', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Meat Pie', img: 'https://images.unsplash.com/photo-1541781286675-7b3c9817e3d5?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Plantain', img: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Akara', img: 'https://images.unsplash.com/photo-1604908553982-57e1bdf4cf0f?q=80&w=1400&auto=format&fit=crop' },
]

export default function Home() {
  const backend = import.meta.env.VITE_BACKEND_URL

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1800&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unforgettable Finger Food Catering for All UK Events
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.15, duration:0.6}} className="mt-4 text-lg md:text-xl text-white/90">
            Elevating Your Events, One Bite at a Time.
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6}} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">Get a Free Quote Today</Link>
            <a href="#menu" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold">View Menu</a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Bringing vibrant African & Caribbean flavour to events across the UK</h2>
            <p className="mt-4 text-lg text-gray-600">From intimate gatherings to large-scale celebrations, Choppinzskys crafts irresistible finger foods that wow your guests and make hosting effortless. Professional, punctual and delicious – every time.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-rose-100 p-6 rounded-xl border border-amber-200/50">
            <p className="font-semibold">Why Choose Choppinzskys?</p>
            <ul className="mt-3 space-y-2 text-sm">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2"><f.icon className="text-emerald-600" size={18}/> {f.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="max-w-7xl mx-auto px-4 py-6 md:py-12">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">Crowd-Pleasers</h3>
          <Link to="/menu" className="text-emerald-700 font-semibold hover:underline">View Full Menu →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcase.map((item) => (
            <div key={item.name} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <blockquote className="bg-emerald-50 border border-emerald-100 p-6 md:p-8 rounded-2xl text-emerald-900 text-lg leading-relaxed">
          “Choppinzskys made our wedding reception a hit! Guests kept going back for more. Professional service and truly delicious food.”
          <footer className="mt-4 text-sm text-emerald-800">— A very happy couple</footer>
        </blockquote>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-2xl font-extrabold">Ready to Delight Your Guests?</h4>
            <p className="text-white/90">Let’s plan a menu that fits your event and budget.</p>
          </div>
          <Link to="/menu" className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold">View Our Full Menu</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
