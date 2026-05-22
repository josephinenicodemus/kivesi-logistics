
export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-10">Professional Logistics Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Freight Transportation',
            'Warehousing',
            'Cargo Handling',
            'Distribution',
            'Fleet Management',
            'Clearing & Forwarding'
          ].map(service => (
            <div key={service} className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-300">
                Reliable and efficient logistics solutions for businesses.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
