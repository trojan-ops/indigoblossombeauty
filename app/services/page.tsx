import NavigationBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const serviceCategories = [
  {
    title: "Facials & Advanced Skin",
    description:
      "Spa facials featuring deep hydration with Ultraceuticals serums & sonophoresis. Enhance your results with LED Light Therapy or Microdermabrasion.",
    price: "From $150 (Add-ons from $20)",
    href: "/services/facials",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Soothing Massages",
    description:
      "Unwind with our 60-minute Meditation Massage (Swedish style with sweet almond & essential oils) or Hot Stone Massage to ease deep tension.",
    price: "$120 (60 Mins)",
    href: "/services/massages",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Nail Care & Spa Pedicures",
    description:
      "Meticulous nail care featuring our signature Spa Pedicure with a smoothing foot exfoliation, warm towel cocoon, hydrating massage, and fresh polish.",
    price: "$80 (60 Mins)",
    href: "/services/nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Lashes & Brows",
    description:
      "Flawless definitions enhanced with trusted Elleebana formulas, including Eyebrow Waxing, Eyelash Lifts & Tints, and Henna Brows.",
    price: "From $40",
    href: "/services/lashes-brows",
    image:
      "https://images.unsplash.com/photo-1656177685188-5df71fe92be8?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ServicesOverviewPage() {
  return (
    <main className="w-full bg-zinc-950 text-white min-h-screen flex flex-col justify-between">
      <NavigationBar />

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <section className="text-center space-y-4">
          <span className="text-pink-400 uppercase tracking-widest text-xs font-semibold">
            Sussex Inlet, NSW
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500">
            Our Services & Treatments
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of luxury and relaxation at Indigo Blossom Beauty in Sussex
            Inlet. Using finest products like Ultraceuticals, Eminence, and Pure Fiji to leave you
            feeling relaxed, restored, confident—and amazing.
          </p>
        </section>

        {/* Grid of All Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300 group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-grow justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <h2 className="text-2xl font-bold text-pink-400">{service.title}</h2>
                    <span className="text-amber-300 font-semibold text-xs whitespace-nowrap bg-zinc-950 px-3 py-1.5 rounded-full border border-zinc-800 shadow-inner">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
                <Link
                  href={service.href}
                  className="inline-block bg-zinc-800 hover:bg-pink-600 text-white font-medium text-center py-2.5 rounded transition shadow"
                >
                  Explore {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Product Callout Section */}
        <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <i className="fa-solid fa-spa text-9xl text-pink-500"></i>
          </div>
          <h2 className="text-2xl font-bold text-pink-400">
            Powered by Premium Brands & Pure Fiji Luxury
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Our treatments are elevated by professional-grade formulas including{" "}
            <strong className="text-white">Ultraceuticals</strong> and{" "}
            <strong className="text-white">Eminence</strong> for targeted skincare,{" "}
            <strong className="text-white">Elleebana</strong> for stunning lashes and brows, and
            tropical <strong className="text-white">Pure Fiji</strong> body care featuring
            nourishing exotic coconut oils, hydrating body lotions, and pineapple coconut sugar
            scrubs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-lg transition shadow-lg"
            >
              Book Your Appointment
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
