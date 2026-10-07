import NavigationBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full bg-zinc-950 text-white min-h-screen flex flex-col justify-between">
      <NavigationBar />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Header Intro */}
        <section className="text-center space-y-4">
          <span className="text-pink-400 uppercase tracking-widest text-xs font-semibold">
            Sussex Inlet, NSW
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500">
            About Indigo Blossom Beauty
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to Sussex Inlet’s serene salon. Experience the perfect blend of luxury and
            relaxation with our wide range of treatments designed to leave you feeling relaxed,
            restored, confident—and amazing.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-pink-400">Our Sanctuary & Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              At Indigo Blossom Beauty, we offer a tranquil escape where modern elegance meets
              personalized care. Our salon specializes in high-quality facials, soothing massages,
              meticulous nail care, and flawless brows and lashes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every treatment is crafted to provide an uplifting, restorative ritual, helping you
              unwind from the everyday and step out feeling completely renewed.
            </p>
          </div>
          <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-2xl border border-zinc-800 group">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
              alt="Indigo Blossom Beauty salon interior ambiance"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
          </div>
        </section>

        {/* Products & Advanced Techniques Section */}
        <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl space-y-8 shadow-xl">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-400">
              Our Premium Products & Advanced Techniques
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We believe in using only the finest products and cutting-edge techniques to ensure
              exceptional results for your skin and body:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/80 space-y-3 shadow hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-pink-400">Ultraceuticals & Eminence</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                High-performance medical-grade skincare utilized in our signature spa facials,
                paired with gentle sonophoresis for deep hydration and skin renewal.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/80 space-y-3 shadow hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-pink-400">Pure Fiji</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tropical luxury featuring nourishing exotic coconut oil, hydrating body lotions with
                pure plant sources, and rejuvenating pineapple coconut sugar scrubs.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/80 space-y-3 shadow hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-pink-400">Elleebana</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Trusted, professional formulas used to enhance our expert eyebrow waxing, eyelash
                lifts, and tints for flawless definition.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/80 space-y-3 shadow hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-pink-400">Advanced Skin Tech</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Targeted treatments including LED Light Therapy (to ease redness, repair skin, and
                target acne bacteria) and Microdermabrasion (to refine pores and smooth texture).
              </p>
            </div>
          </div>
        </section>

        {/* Gallery / Atmosphere Highlight */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-60 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop"
              alt="Botanical spa oils and warm stones"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative h-60 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
              alt="Relaxing skincare treatment"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative h-60 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"
              alt="Meticulous nail care and spa atmosphere"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-2xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -left-10 -top-10 opacity-10 pointer-events-none">
            <i className="fa-solid fa-spa text-9xl text-pink-500"></i>
          </div>
          <h2 className="text-3xl font-bold text-white">Ready to Unwind?</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Book your next session with us in Sussex Inlet and experience the ultimate blend of
            luxury and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-lg transition shadow-lg"
            >
              Book An Appointment
            </Link>
            <a
              href="tel:0407243573"
              className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-3 rounded-lg transition border border-zinc-700"
            >
              Call 0407 243 573
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
