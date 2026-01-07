export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 max-w-4xl mx-auto">
      <h3 className="text-4xl font-extrabold text-center text-gray-800 mb-14">Contact Us</h3>
      <p className="text-center text-lg text-gray-700 mb-8">Feel free to reach out to us for any inquiries or collaborations.</p>
      <p className="text-center text-2xl font-bold text-gray-800 mb-10">+91 - 8686XXX</p>
      <form className="grid gap-6 bg-white p-10 rounded-xl shadow-lg">
        <input className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" placeholder="Name" />
        <input className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" placeholder="Email" />
        <textarea className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600" rows="6" placeholder="Project details" />
        <button className="bg-yellow-600 text-white p-4 rounded-lg font-bold hover:bg-yellow-700 transition-colors duration-300">
          Submit
        </button>
      </form>
    </section>
  )
}
