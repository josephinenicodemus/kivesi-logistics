
export default function Fleet() {
  return (
    <section id="fleet" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-8">Our Fleet</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map(item => (
            <div key={item} className="glass rounded-3xl h-64 flex items-center justify-center">
              Fleet Image {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
