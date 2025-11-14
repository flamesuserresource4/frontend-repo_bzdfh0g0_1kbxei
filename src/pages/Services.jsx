import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CalendarCheck, ClipboardList, Truck, ThumbsUp, Building2, PartyPopper, Cake } from 'lucide-react'

const steps = [
  {icon: CalendarCheck, title: 'Consultation', desc: 'Get in touch to discuss your event and menu ideas.'},
  {icon: ClipboardList, title: 'Quote', desc: 'We provide a detailed, no-obligation quote.'},
  {icon: ThumbsUp, title: 'Confirmation', desc: 'Secure your date with a booking fee.'},
  {icon: Truck, title: 'Delivery & Setup', desc: 'We arrive on time, set up beautifully, and let you enjoy your event.'},
]

const events = [
  {icon: Building2, label: 'Corporate Events'},
  {icon: PartyPopper, label: 'Private Parties'},
  {icon: Cake, label: 'Weddings & Celebrations'},
]

export default function Services(){
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">Services & How It Works</h1>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6">
              <s.icon className="text-emerald-600" />
              <h3 className="font-bold mt-3">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12">Types of Events We Cater</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {events.map((e, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 flex items-center gap-3">
              <e.icon className="text-emerald-600" />
              <span className="font-semibold">{e.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
