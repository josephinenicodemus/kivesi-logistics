
export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Phone</h3>
            <p className="text-gray-300">+255 700 000 000</p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Email</h3>
            <p className="text-gray-300">info@kivesi.co.tz</p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Location</h3>
            <p className="text-gray-300">Dar es Salaam, Tanzania</p>
          </div>
        </div>
      </div>
    </section>
  )
}
