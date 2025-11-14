import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const food = [
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541781286675-7b3c9817e3d5?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604908553982-57e1bdf4cf0f?q=80&w=1400&auto=format&fit=crop',
]

export default function Gallery(){
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">Gallery</h1>
        <p className="text-center text-gray-600 mt-3">A visual feast from our kitchen and events</p>

        <h2 className="text-xl font-bold mt-10 mb-4">Food Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {food.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
              <img src={src} alt="Food" className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-12 mb-4">Events Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-500">Coming Soon!</div>
          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-500">Coming Soon!</div>
          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-500">Coming Soon!</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
