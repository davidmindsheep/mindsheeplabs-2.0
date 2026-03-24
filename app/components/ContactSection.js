export default function ContactSection() {
  return (
    <section id="contact" className="section-alt py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4">
            Let&apos;s Talk <span className="text-gradient">Growth</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: "1.05rem" }}>
            Tell us about your business and we&apos;ll come back with a clear plan — no obligation, no fluff.
          </p>
        </div>
        <div className="glass-panel p-10 md:p-16 max-w-2xl mx-auto contact-panel">
          <form className="flex flex-col gap-6" action="#contact" method="POST">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" className="form-input" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
              <input type="email" id="email" name="email" placeholder="you@company.com" className="form-input" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="business" className="text-sm font-semibold text-gray-300">Tell us about your business</label>
              <textarea
                id="business"
                name="business"
                rows={4}
                placeholder="What do you sell, who do you sell to, and what's your biggest growth challenge right now?"
                className="form-input"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-sm font-semibold text-gray-300">Monthly ad budget (approximate)</label>
              <select id="budget" name="budget" className="form-input">
                <option value="">Select a range</option>
                <option value="under5k">Under $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-50k">$15,000 – $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", textAlign: "center", padding: "1rem" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
