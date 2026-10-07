import { homeBannerImages } from "@/data/homeBannerImages";
import NavigationBar from "@/components/Navigation";
import BannerSlider from "@/components/Home/BannerSlider";
import ServiceCard from "@/components/Home/ServiceCard";
import BusinessHours from "@/components/BusinessHours";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full bg-zinc-950 text-white min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Banner Section */}
      <section className="home-banner-wrapper h-[90vh] w-full relative overflow-hidden flex items-center justify-center">
        <article
          className="absolute top-1/2 left-1/2 z-10 min-w-56 max-w-xl -translate-x-1/2 -translate-y-1/2 
                    bg-zinc-900/70 backdrop-blur-md border border-zinc-700/50 rounded-lg p-8 shadow-2xl text-center text-white space-y-4"
        >
          <span className="text-pink-400 uppercase tracking-widest text-xs font-semibold">
            Sussex Inlet, NSW
          </span>
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md tracking-wide">
            Indigo Blossom Beauty
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 drop-shadow-sm">
            Sussex Inlet’s serene salon offering luxury facials, soothing massages, meticulous nail
            care, and flawless brows & lashes. Leave feeling relaxed, restored, confident—and
            amazing.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium text-base md:text-lg rounded transition shadow-lg"
          >
            Book Your Treatment
          </Link>
        </article>
        <BannerSlider images={homeBannerImages} />
      </section>

      {/* Services Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center py-16 px-4 bg-zinc-900"
        aria-labelledby="home-services-title"
      >
        <h2
          className="text-4xl text-center mb-4 text-white uppercase font-bold tracking-wide"
          id="home-services-title"
        >
          Our Signature Services
        </h2>
        <p className="text-center max-w-2xl text-gray-300 mb-12 leading-relaxed">
          Experience the perfect blend of luxury and relaxation with our wide range of treatments,
          using only the finest products and advanced techniques like LED and microdermabrasion.
        </p>
        <article
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 py-5 w-full max-w-6xl"
          aria-label="Main services cards section"
        >
          <ServiceCard
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
            alt="Relaxing facial and skincare treatment"
            title="Facials & Advanced Skin"
            description="Spa facials featuring deep hydration with Ultraceuticals serums, sonophoresis, LED Light Therapy, and microdermabrasion."
          />
          <ServiceCard
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop"
            alt="Soothing massage with warm stones"
            title="Soothing Massages"
            description="Calming Meditation Massages with sweet almond & essential oils, and Hot Stone Massages to ease deep tension."
          />
          <ServiceCard
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop"
            alt="Spa pedicure and nail care"
            title="Nails, Lashes & Brows"
            description="Pampering spa pedicures, precise brow waxing/henna, and Elleebana-enhanced eyelash lifts and tints."
          />
        </article>
        <div className="pt-8">
          <Link
            className="text-white bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded transition font-medium shadow-lg"
            href="/services"
          >
            Explore All Services & Pricing
          </Link>
        </div>
      </section>

      {/* About & Products Section */}
      <section
        className="flex flex-col py-20 px-4 bg-zinc-950"
        aria-label="Informational background about the salon and our products"
      >
        <article className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="w-full md:w-6/12 flex flex-col gap-5">
            <h2 className="text-3xl text-pink-500 font-bold uppercase tracking-wide">
              A Sanctuary of Serenity in Sussex Inlet
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              At Indigo Blossom Beauty, we curate every detail to provide a peaceful escape from the
              everyday. Whether you are unwinding with a 60-minute hot stone massage or rejuvenating
              your skin with advanced LED therapy, our treatments are designed to restore your glow.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              We proudly partner with industry-leading professional brands to deliver exceptional
              results:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>
                <strong className="text-white">Ultraceuticals & Eminence:</strong> High-performance
                medical-grade skincare for targeted skin health.
              </li>
              <li>
                <strong className="text-white">Pure Fiji:</strong> Tropical indulgence featuring
                nourishing exotic coconut oil, hydrating body lotions, and pineapple coconut sugar
                scrubs.
              </li>
              <li>
                <strong className="text-white">Elleebana:</strong> Trusted, professional formulas
                for flawless lash lifts and brow styling.
              </li>
            </ul>
            <div className="pt-4">
              <Link
                className="bg-zinc-800 border border-zinc-700 text-white font-medium px-6 py-3 rounded w-fit hover:bg-zinc-700 transition shadow"
                href="/about"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="w-full md:w-6/12 flex justify-center items-center">
            <img
              className="w-full rounded-xl shadow-2xl object-cover max-h-[500px] border border-zinc-800"
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
              alt="Indigo Blossom Beauty interior and products"
              loading="lazy"
            />
          </div>
        </article>
      </section>

      {/* Business Hours Section */}
      <BusinessHours />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
