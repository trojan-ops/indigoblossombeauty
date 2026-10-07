import NavigationBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function FacialsPage() {
  return (
    <main className="w-full bg-zinc-900 text-white min-h-screen flex flex-col justify-between">
      <NavigationBar />

      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <span className="text-pink-400 uppercase tracking-widest text-xs font-semibold">
          Sussex Inlet, NSW
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">Facials & Advanced Skin</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Restore your glow and rejuvenate your complexion with high-performance skincare treatments
          and advanced skin technology at Indigo Blossom Beauty in Sussex Inlet.
        </p>

        {/* Main Spa Facial */}
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 text-left my-8 shadow-xl overflow-hidden group">
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
              alt="Relaxing spa facial treatment"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent"></div>
          </div>
          <div className="p-6 sm:p-8 space-y-4 -mt-10 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <h3 className="text-2xl font-semibold text-pink-400">Spa Facial</h3>
              <span className="font-bold text-amber-300 text-xl bg-zinc-950 px-4 py-1.5 rounded-full border border-zinc-700 w-fit shadow-inner">
                $150
              </span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Enjoy a calming scalp, neck, and shoulder massage, followed by deep hydration using
              Ultraceuticals serums with gentle sonophoresis, finishing with a soothing facial
              massage.
            </p>
          </div>
        </div>

        {/* Add-ons Section Header */}
        <div className="pt-4 text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Enhance Your Treatment</h2>
          <p className="text-sm text-gray-400 mb-6">
            Take your skincare results further with our advanced treatment add-ons:
          </p>
        </div>

        {/* Add-ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-zinc-800 rounded-xl border border-zinc-700 flex flex-col justify-between shadow-xl overflow-hidden group">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621309166804-d99b09e16d05?q=80&w=800&auto=format&fit=crop"
                alt="LED Light Therapy skincare treatment"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-pink-400">LED Light Therapy</h3>
                <span className="font-bold text-amber-300 text-lg bg-zinc-950 px-3 py-1 rounded-full border border-zinc-700 text-sm">
                  +$20
                </span>
              </div>
              <span className="text-xs text-gray-400 block pb-1">15-Minute Add-On</span>
              <p className="text-gray-300 text-sm leading-relaxed">
                Enhances your skin's natural repair, targets acne-causing bacteria, eases redness,
                fades scarring, and boosts renewal.
              </p>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-xl border border-zinc-700 flex flex-col justify-between shadow-xl overflow-hidden group">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
                alt="Advanced Microdermabrasion treatment"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-pink-400">Microdermabrasion</h3>
                <span className="font-bold text-amber-300 text-lg bg-zinc-950 px-3 py-1 rounded-full border border-zinc-700 text-sm">
                  +$80
                </span>
              </div>
              <span className="text-xs text-gray-400 block pb-1">Advanced Resurfacing Add-On</span>
              <p className="text-gray-300 text-sm leading-relaxed">
                Gently removes the top layer of skin to soften wrinkles, refine pores, tone
                discoloration, and smooth overall texture.
              </p>
            </div>
          </div>
        </div>

        {/* Product Callout */}
        <div className="bg-zinc-950 p-6 sm:p-8 rounded-xl border border-zinc-800 text-center space-y-2 mt-8 shadow-inner">
          <h4 className="text-lg font-semibold text-pink-400">
            Powered by Ultraceuticals & Eminence
          </h4>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            We use only the finest professional-grade skincare products to nourish your complexion
            and ensure visible, radiant results.
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition shadow-lg"
          >
            Book a Facial Treatment
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
