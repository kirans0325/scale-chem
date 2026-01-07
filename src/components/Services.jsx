export default function Services() {
  const services = [
    "Process Design & FEED",
    "HAZOP & Process Safety",
    "Reactor Scale-Up & Tech Transfer",
    "Aspen Simulation & Equipment Sizing",
    "Utilities & Energy Optimization",
    "Automation & Digitalization"
  ]

  return (
    <section id="services" className="bg-gray-50 py-20">
      <h3 className="text-4xl font-extrabold text-center text-gray-800 mb-14">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map(s => (
          <div key={s} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <h4 className="font-bold text-xl text-gray-800 text-center">{s}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
