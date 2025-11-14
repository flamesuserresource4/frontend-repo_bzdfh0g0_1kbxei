import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-14">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Story</h1>
        <p className="mt-4 text-lg text-gray-600">Choppinzskys was born from a love for vibrant, shareable food that brings people together. We specialise in African and Caribbean-inspired chops, finger foods and party snacks — the kind that get people talking and reaching for more.</p>

        <h2 className="text-2xl font-bold mt-10">Our Promise</h2>
        <p className="mt-2 text-gray-600">Quality ingredients, freshly made to order, reliable delivery and a beautifully presented spread. We pride ourselves on being professional, warm and attentive — so you can enjoy your event while we take care of the details.</p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <img className="rounded-xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWFtfGVufDB8MHx8fDE3NjMxNTQ1MTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Team" />
          <img className="rounded-xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1400&auto=format&fit=crop" alt="Kitchen" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
