export default function BrightPortfolio() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-5">
              Freelance Landing Page Designer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              I Create <span className="text-orange-500">Modern</span>
              <br />
              Business Landing Pages
            </h1>

            <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-xl">
              Helping businesses build a strong online presence with premium,
              mobile-responsive landing pages designed to attract more customers
              and enquiries.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-7 py-4 rounded-2xl bg-orange-500 text-white font-semibold hover:scale-105 transition"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-2xl border border-zinc-300 hover:border-orange-500 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[32px] shadow-2xl border border-orange-100 p-8">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-orange-50 rounded-3xl p-6">
                <p className="text-4xl font-bold text-orange-500">24h</p>
                <p className="text-zinc-600 mt-2 text-sm">
                  Fast Delivery Available
                </p>
              </div>

              <div className="bg-yellow-50 rounded-3xl p-6">
                <p className="text-4xl font-bold text-yellow-500">100%</p>
                <p className="text-zinc-600 mt-2 text-sm">
                  Mobile Responsive
                </p>
              </div>

              <div className="bg-blue-50 rounded-3xl p-6 col-span-2">
                <p className="text-2xl font-bold mb-2">
                  Premium Business Websites
                </p>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Modern UI design focused on local businesses, startups,
                  interiors, gyms, salons, cafes, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What I Offer
            </h2>

            <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
              Professional landing page solutions designed to help businesses
              grow online and increase customer enquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                title: 'Landing Page Design',
                desc: 'Modern and premium business landing pages built for conversions and customer enquiries.',
              },
              {
                title: 'Mobile Responsive Design',
                desc: 'Fully optimized layouts for mobile, tablet, and desktop devices.',
              },
              {
                title: 'WhatsApp Integration',
                desc: 'Easy customer communication with direct WhatsApp contact integration.',
              },
              {
                title: 'Business Branding',
                desc: 'Clean and professional layouts matching your business identity.',
              },
              {
                title: 'Fast Delivery',
                desc: 'Quick project completion without compromising design quality.',
              },
              {
                title: 'Modern UI Design',
                desc: 'Premium visuals and modern layouts designed to impress customers.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-[30px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 md:px-20 py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-4">
              Industries
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Businesses I Work With
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              'Interior Designers',
              'Gyms & Fitness',
              'Salons & Beauty',
              'Restaurants & Cafes',
              'Real Estate',
              'Clinics',
              'Startups',
              'Local Businesses',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 text-center border border-zinc-200 shadow-sm"
              >
                <p className="font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-4">
              Pricing
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Affordable Website Packages
            </h2>

            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Flexible packages designed for small businesses and growing brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Starter',
                price: '₹3,999',
                features: [
                  '1 Landing Page',
                  'Mobile Responsive',
                  'WhatsApp Integration',
                  'Fast Delivery',
                ],
              },
              {
                title: 'Professional',
                price: '₹6,999',
                popular: true,
                features: [
                  '3-Page Website',
                  'Premium UI Design',
                  'Contact Form',
                  'Animations & Effects',
                  'Priority Support',
                ],
              },
              {
                title: 'Business',
                price: '₹11,999',
                features: [
                  'Advanced Website',
                  'Custom Sections',
                  'Gallery Integration',
                  'Business Branding',
                  'Priority Delivery',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-[32px] p-8 border transition hover:-translate-y-1 duration-300 ${
                  plan.popular
                    ? 'bg-orange-500 text-white border-orange-500 shadow-2xl'
                    : 'bg-white border-zinc-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-4 py-2 rounded-full bg-white text-orange-500 text-sm font-bold mb-6">
                    Most Popular
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-4">{plan.title}</h3>

                <p className="text-5xl font-bold mb-8">{plan.price}</p>

                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="text-lg">
                      ✓ {feature}
                    </p>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-2xl font-semibold transition ${
                    plan.popular
                      ? 'bg-white text-orange-500'
                      : 'bg-orange-500 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Why Choose Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Clean Designs That Help Businesses Look Professional Online
          </h2>

          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-orange-50">
            I focus on creating modern, visually appealing landing pages that
            help businesses build trust, attract customers, and improve their
            online presence.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <div className="bg-white/20 backdrop-blur rounded-2xl px-6 py-4">
              Modern UI
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl px-6 py-4">
              Fast Delivery
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl px-6 py-4">
              Mobile Responsive
            </div>

            <div className="bg-white/20 backdrop-blur rounded-2xl px-6 py-4">
              Business Focused
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Let’s Build Your Business Website
          </h2>

          <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Need a professional landing page for your business? Contact me today
            to create a modern website that helps your brand stand out online.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/917305194866?text=Hi%20I%20need%20a%20landing%20page%20for%20my%20business"
              className="px-8 py-4 rounded-2xl bg-orange-500 text-white font-semibold hover:scale-105 transition"
            >
              WhatsApp Me
            </a>

            <a
              href="mailto:rahuldurairajd@gmail.com"
              className="px-8 py-4 rounded-2xl border border-zinc-300 hover:border-orange-500 transition"
            >
              Send Email
            </a>

            <a
              href="tel:+917305194866"
              className="px-8 py-4 rounded-2xl border border-zinc-300 hover:border-orange-500 transition"
            >
              Call Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
