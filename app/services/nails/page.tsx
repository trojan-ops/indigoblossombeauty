import NavigationBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NailsPage() {
  return (
    <main className="w-full bg-zinc-900 text-white min-h-screen flex flex-col justify-between">
      <NavigationBar />

      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">Meticulous Nail Care</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Pamper your feet with our signature spa treatments, crafted to give you the ultimate
          relaxation and attention you deserve at Indigo Blossom Beauty in Sussex Inlet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-left my-8 max-w-xl mx-auto">
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2">Spa Pedicure</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                A smoothing foot exfoliation wrapped in a warm towel cocoon, followed by a hydrating
                massage, neat cuticles and nails, and a fresh polish.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-700">
              <span className="text-xs text-gray-400">60 Minutes</span>
              <span className="font-bold text-pink-500 text-lg">$80</span>
            </div>
          </div>
        </div>

        {/* Product Callout */}
        <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800 text-center space-y-2">
          <h4 className="text-md font-semibold text-white">
            Elevated with Pure Fiji Tropical Care
          </h4>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Experience tropical luxury with nourishing exotic coconut oils, hydrating body lotions,
            and rejuvenating pineapple coconut sugar scrubs during your pedicure session.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded transition shadow"
          >
            Book Nail Session
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
